#!/usr/bin/env python3
"""Save the published portfolio and its rendering dependencies for local hosting."""
import concurrent.futures
import hashlib
import html
import json
import os
from pathlib import Path
import re
import subprocess
from urllib.parse import urljoin, urlsplit

SOURCE = "https://samueldemir.framer.website/"
FRAMER_SPINNER = "https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg"
ROOT = Path(__file__).resolve().parents[1]
HOSTS = {"framerusercontent.com", "app.framerstatic.com"}
ICONS = ["LinkedinLogo", "GithubLogo", "YoutubeLogo", "StackOverflowLogo"]
ICON_BASE = "https://framer.com/m/phosphor-icons/"
STACK_OVERFLOW_PROFILE = "https://stackoverflow.com/users/11247816/samuel-demir"
SOCIAL_ICON_COLOR = "var(--token-258ef8c7-ff75-4402-b09e-8e1423116f70, rgb(255, 255, 255))"
# https://github.com/simple-icons/simple-icons/blob/develop/icons/xing.svg
XING_ICON_PATH = (
    "M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 "
    "4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536"
    "l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 "
    "21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 "
    "4.05c.004.01.004.016 0 .021L1.86 16.051c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461"
    "c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v.016z"
)
SOCIAL_LINKS = {
    "XingLogo": {
        "id": "xing-profile",
        "href": "https://www.xing.com/profile/Samuel_Demir",
        "label": "XING profile",
        "viewBox": "-3 -3 30 30",
        "path": XING_ICON_PATH,
    },
    "GoldsmithLogo": {
        "id": "goldsmith-shop",
        "href": "https://www.thelittlegoldsmith.ch/de/",
        "label": "thelittlegoldsmith.ch",
        "viewBox": "-3 -3 30 30",
        "path": (
            "M4.5 5h15l3.1 5.1a1 1 0 0 1-.1 1.2l-9.8 10.4a1 1 0 0 1-1.4 0L1.5 11.3a1 1 0 0 1-.1-1.2L4.5 5Z"
            "M5.4 6.5 3.3 9.9h4.3l1.3-3.4H5.4Zm5.1 0-1.3 3.4h5.6l-1.3-3.4h-3Zm4.6 0 1.3 3.4h4.3l-2.1-3.4h-3.5Z"
            "M20.4 11.4h-4l-2.8 7.2 6.8-7.2Zm-5.6 0H9.2l2.8 7.3 2.8-7.3Zm-7.2 0h-4l6.8 7.2-2.8-7.2Z"
        ),
    },
}
SOCIAL_LINKS_CSS = """<style id="profile-social-links">
  .framer-TrwQM .framer-1hq5zni {
    container: profile-social-links / inline-size;
  }
  .framer-TrwQM .framer-1hq5zni > .framer-w8m347 {
    display: grid;
    grid-template-columns: repeat(6, 40px);
  }
  @container profile-social-links (width < 280px) {
    .framer-TrwQM .framer-1hq5zni > .framer-w8m347 {
      grid-template-columns: repeat(3, 40px);
    }
  }
</style>"""
URLS = re.compile(r'''https?://[^\s"'`<>\\)]+''')
RELATIVE = re.compile(r'''(?:\bfrom\s*|\bimport\s*\(\s*|\bimport\s*)(["'`])((?:\./|\.\./)[^"'`\s]+?\.(?:mjs|js|css|json)(?:\?[^"'`\s]*)?)\1''')
EXTENSIONS = {".mjs", ".js", ".css", ".json", ".png", ".jpg", ".jpeg",
              ".webp", ".svg", ".avif", ".gif", ".woff", ".woff2", ".ttf", ".mp4", ".webm", ".framercms", ".lottie"}
TEXT = {".mjs", ".js", ".css", ".json", ".svg", ".html"}


def normalize(url):
    return html.unescape(url)


def supported(url):
    p = urlsplit(url)
    if url in {ICON_BASE + icon + ".js@0.0.57" for icon in ICONS}:
        return True
    return (p.netloc in HOSTS and Path(p.path).suffix in EXTENSIONS
            and not any(c in url for c in "{}$"))


def destination(url):
    if url == SOURCE:
        return ROOT / "index.html"
    p = urlsplit(url)
    path = Path("assets") / p.netloc / p.path.lstrip("/")
    if path.name.endswith(".js@0.0.57"):
        path = path.with_name(path.name.replace(".js@0.0.57", ".mjs"))
    if p.query:
        digest = hashlib.sha256(p.query.encode()).hexdigest()[:12]
        path = path.with_name(path.stem + "--" + digest + path.suffix)
    if ".." in path.parts:
        raise ValueError("Invalid asset path")
    return ROOT / path


def references(text, origin):
    refs = [(m.group(), normalize(m.group())) for m in URLS.finditer(text)]
    if urlsplit(origin).path.endswith((".mjs", ".js", ".css")):
        refs += [(m.group(2), urljoin(origin, m.group(2))) for m in RELATIVE.finditer(text)]
        # Framer constructs collection URLs from its original virtual module URL.
        for m in re.finditer(r'''new URL\(`([^`]+\.framercms)`,`(https://[^`]+)`\)\.href\.replace\(`/modules/`,`/cms/`\)''', text):
            collection = urljoin(m.group(2), m.group(1)).replace("/modules/", "/cms/")
            refs.append((collection, collection))
    return [(raw, url) for raw, url in refs if supported(url)]


def download(url):
    target = destination(url)
    target.parent.mkdir(parents=True, exist_ok=True)
    # Keep original bytes separately until every dependency is discovered.
    fetched = subprocess.run(["curl", "--fail", "--location", "--silent", "--show-error",
                              "--retry", "2", "--max-time", "90", url], capture_output=True)
    if fetched.returncode:
        error = fetched.stderr.decode().strip()
        # The published bundle still references this retired loading icon.
        if url != FRAMER_SPINNER or not error.endswith("404") or not target.is_file():
            raise RuntimeError(f"{url}: {error}")
        print("Using the saved Framer loading icon", flush=True)
        data = target.read_bytes()
    else:
        data = fetched.stdout
    if target.suffix in TEXT:
        return url, data, references(data.decode("utf-8"), url)
    if target.suffix == ".framercms":
        return url, data, references(data.decode("latin1"), url)
    return url, data, []


def customize_portfolio(text, filename):
    if filename == "index.html":
        text = re.sub(
            r'(<a\b[^<>]*href="https://www\.dropbox\.com/[^"<>]*/lebenslauf_samuel_demir\.pdf[^"<>]*") rel(?=>)',
            r'\1 target="_blank" rel="noopener noreferrer"', text,
        )
        text = re.sub(r'(?m)^[ \t]*<div id="__framer-badge-container">[^\n]*</div>\n', '', text)
        text = re.sub(
            r'<!--\$--><a\b[^<>]*data-framer-name="Built In"[^<>]*>'
            r'<div\b[^<>]*data-framer-name="Built In Logo"[^<>]*></div></a><!--/\$-->', '', text,
        )
    elif filename.startswith("script_main."):
        text = re.sub(r'\(function\(\)\{[^\n]*?getElementById\(`__framer-badge-container`\)[^\n]*?\}\)\(\)', '', text)
    elif filename.startswith("shared-lib."):
        text = text.replace(
            'nodeId:`JyGMxwMno`,openInNewTab:!1,relValues:[]',
            'nodeId:`JyGMxwMno`,openInNewTab:typeof b===`string`&&b.includes(`/lebenslauf_samuel_demir.pdf?`),relValues:[]',
        )
        text = re.sub(
            r'/\*#__PURE__\*/\s*\w+\(\w+,\{href:`https://framer\.com/`,[^\n]*?'
            r'"data-framer-name":`Built In Logo`[^}]*\}\)\}\)\}\),', '', text,
        )
    return add_social_links(text, filename)


def add_social_links(text, filename):
    if SOCIAL_LINKS["GoldsmithLogo"]["href"] in text:
        return text
    stack_overflow = re.escape(STACK_OVERFLOW_PROFILE)

    if filename == "index.html":
        button = (
            r'<div class="framer-rjxmoh-container"><!--\$--><a\b[^<>]*href="'
            + stack_overflow + r'"[^<>]*><div\b[^<>]*><div style="display:contents"></div></div></a><!--/\$--></div>'
        )

        def render_link(template, link):
            icon = (
                f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{link["viewBox"]}" aria-hidden="true" '
                f'focusable="false" width="20" height="20" fill="{SOCIAL_ICON_COLOR}">'
                f'<path d="{link["path"]}" fill-rule="evenodd"></path></svg>'
            )
            return (template.replace(STACK_OVERFLOW_PROFILE, html.escape(link["href"]))
                    .replace('aria-label="Social Link"', f'aria-label="{html.escape(link["label"])}"')
                    .replace('target="_blank"', 'target="_blank" rel="noopener noreferrer"')
                    .replace('<div style="display:contents"></div>', f'<div style="display:contents">{icon}</div>'))

        text = re.sub(button, lambda m: m.group() + ''.join(render_link(m.group(), link) for link in SOCIAL_LINKS.values()), text)
        return text.replace('</head>', SOCIAL_LINKS_CSS + '\n</head>', 1)

    if filename.startswith("shared-lib."):
        # Reuse the neighboring button's layout and assign a distinct Framer node ID.
        button = (
            r'/\*#__PURE__\*/ h\(z,\{height:40,width:`40px`,(?:(?!/\*#__PURE__\*/)[^\n])*?'
            r'\},y,w\),children:/\*#__PURE__\*/ h\(Oe,\{className:`framer-rjxmoh-container`,'
            r'[^\n]*?FMLNTD1Dj:`' + stack_overflow + r'`,foCNdHmvV:`StackOverflowLogo`,[^\n]*?width:`100%`\}\)\}\)\}\)'
        )

        def append_component(match):
            original = match.group()
            return original + ''.join(
                ',' + original.replace(STACK_OVERFLOW_PROFILE, link["href"])
                .replace('`StackOverflowLogo`', f'`{name}`').replace('vsF8jda5h', link["id"])
                for name, link in SOCIAL_LINKS.items()
            )

        text = re.sub(button, append_component, text)
        icons = {name: {key: link[key] for key in ("label", "viewBox", "path")} for name, link in SOCIAL_LINKS.items()}
        text = f'const customSocialIcons={json.dumps(icons, separators=(",", ":"))};\n' + text
        text = text.replace('}=Bl(e),{baseVariant:', '}=Bl(e),customSocialIcon=customSocialIcons[c],{baseVariant:', 1)
        text = text.replace(
            'href:u,nodeId:`FvH5DUUkQ`',
            'href:u,nodeId:`FvH5DUUkQ`,...(customSocialIcon?{openInNewTab:!0,relValues:[`noopener`,`noreferrer`]}:{})',
        )
        text = text.replace('"aria-label":`Social Link`', '"aria-label":customSocialIcon?.label??`Social Link`')
        icon = (
            'h(`div`,{style:{display:`contents`},children:h(`svg`,{xmlns:`http://www.w3.org/2000/svg`,'
            'viewBox:customSocialIcon.viewBox,"aria-hidden":`true`,focusable:`false`,width:20,height:20,'
            f'fill:`{SOCIAL_ICON_COLOR}`,children:h(`path`,{{d:customSocialIcon.path,fillRule:`evenodd`}})}})}})'
        )
        return text.replace(
            'children:/*#__PURE__*/ h(Dl,{color:',
            f'children:customSocialIcon?{icon}:/*#__PURE__*/ h(Dl,{{color:', 1,
        )

    return text


def main():
    originals = {}
    pending = [SOURCE] + [ICON_BASE + icon + ".js@0.0.57" for icon in ICONS]
    seen = set(pending)
    while pending:
        next_batch = set()
        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
            for url, data, refs in pool.map(download, sorted(pending)):
                originals[url] = (data, refs)
                for _, dependency in refs:
                    if dependency not in seen:
                        seen.add(dependency)
                        next_batch.add(dependency)
        print(f"Downloaded {len(originals)} resources; {len(next_batch)} remaining", flush=True)
        pending = next_batch

    for url, (data, refs) in originals.items():
        target = destination(url)
        if target.suffix in TEXT:
            text = data.decode("utf-8")
            replacements = {}
            for raw, dependency in refs:
                relative = os.path.relpath(destination(dependency), target.parent).replace(os.sep, "/")
                if not relative.startswith("."):
                    relative = "./" + relative
                if urlsplit(url).path.endswith(".mjs") and raw.startswith("https://"):
                    # Published modules store asset URLs in template literals.
                    # Resolve against the module, not the page URL, after hydration.
                    relative = "${new URL(" + json.dumps(relative) + ",import.meta.url).href}"
                replacements[raw] = relative
            # One pass avoids replacing a shorter URL inside its responsive variants.
            if replacements:
                pattern = re.compile("|".join(re.escape(s) for s in sorted(replacements, key=len, reverse=True)))
                text = pattern.sub(lambda m: replacements[m.group()], text)
            if url == SOURCE:
                text = re.sub(r'<script\b[^>]*src="https://events\.framer\.com/[^>]*>\s*</script>', '', text)
                text = re.sub(r'<script>[^<]*__framer_force_showing_editorbar_since[^<]*</script>', '', text)
                text = re.sub(r'(?m)^[ \t]+$', '', text.replace('\r\n', '\n'))
            if target.name.startswith("script_main."):
                # The editor is a hosted authoring feature, not part of the portfolio.
                text = text.replace("EditorBar:t===void 0?void 0:", "EditorBar:true?void 0:")
            # This custom component requests a nonexistent Google Fonts family.
            # It already falls back to the existing fonts on the published site.
            if target.suffix in {".mjs", ".js"}:
                text = text.replace("https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@400;500;600;700&display=swap", "data:text/css,")
            if "shared-lib." in target.name:
                base = os.path.relpath(ROOT / "assets/framer.com/m/phosphor-icons", target.parent).replace(os.sep, "/") + "/"
                text = text.replace(ICON_BASE, "${new URL(" + json.dumps(base) + ",import.meta.url).href}")
                text = text.replace(".js@0.0.57`", ".mjs`")
            data = customize_portfolio(text, target.name).encode("utf-8")
        elif target.suffix == ".framercms":
            # CMS records contain length-prefixed JSON image objects. Update both
            # the JSON and its byte length so Framer's binary decoder stays valid.
            for match in reversed(list(re.finditer(rb'\{"src":.*?\}', data))):
                start, end = match.span()
                original = match.group()
                if int.from_bytes(data[start-4:start], "big") != len(original):
                    raise ValueError("Unexpected CMS image encoding")
                image = json.loads(original)
                source = normalize(image["src"])
                image["src"] = "./" + destination(source).relative_to(ROOT).as_posix()
                if "srcSet" in image:
                    image["srcSet"] = URLS.sub(
                        lambda m: "./" + destination(normalize(m.group())).relative_to(ROOT).as_posix(),
                        image["srcSet"],
                    )
                updated = json.dumps(image, separators=(",", ":"), ensure_ascii=False).encode("utf-8")
                data = data[:start-4] + len(updated).to_bytes(4, "big") + updated + data[end:]
        target.write_bytes(data)

    manifest = [{"source": url, "local": str(destination(url).relative_to(ROOT)),
                 "bytes": destination(url).stat().st_size} for url in sorted(originals)]
    (ROOT / "assets" / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Saved {len(manifest)} resources to {ROOT}")


if __name__ == "__main__":
    main()
