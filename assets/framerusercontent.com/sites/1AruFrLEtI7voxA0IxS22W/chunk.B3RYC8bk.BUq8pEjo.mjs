import{n as e}from"./rolldown-runtime.CNOWq4Kh.mjs";import{Ct as t,Dt as n,Et as r,Tt as i,wt as a}from"./framer.u42CKNkG.mjs";function o(e){let t=!1,n;return{get value(){return t||=(n=e(),!0),n}}}function s(){return t.current()===t.preview?_.value:g.value}function c(e,n){let r=t.current()===t.preview?_.value:g.value;for(let t of r)i(t,e,n)}var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a(),l=`--portfolio-will-change-override`,u=`--portfolio-will-change-effect-override`,d=`--portfolio-will-change-filter-override`,f=`--overflow-clip-fallback`,p=`--one-if-corner-shape-supported`,m=[`[data-portfolio-component-type="DeprecatedRichText"] { cursor: inherit; }`,`
[data-portfolio-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --portfolio-font-family: Inter, Inter Placeholder, sans-serif;
    --portfolio-font-style: normal;
    --portfolio-font-weight: 500;
    --portfolio-text-color: #000;
    --portfolio-font-size: 16px;
    --portfolio-letter-spacing: 0;
    --portfolio-text-transform: none;
    --portfolio-text-decoration: none;
    --portfolio-line-height: 1.2em;
    --portfolio-text-alignment: start;
    --portfolio-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] p,
[data-portfolio-component-type="DeprecatedRichText"] div,
[data-portfolio-component-type="DeprecatedRichText"] h1,
[data-portfolio-component-type="DeprecatedRichText"] h2,
[data-portfolio-component-type="DeprecatedRichText"] h3,
[data-portfolio-component-type="DeprecatedRichText"] h4,
[data-portfolio-component-type="DeprecatedRichText"] h5,
[data-portfolio-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] p,
[data-portfolio-component-type="DeprecatedRichText"] div,
[data-portfolio-component-type="DeprecatedRichText"] h1,
[data-portfolio-component-type="DeprecatedRichText"] h2,
[data-portfolio-component-type="DeprecatedRichText"] h3,
[data-portfolio-component-type="DeprecatedRichText"] h4,
[data-portfolio-component-type="DeprecatedRichText"] h5,
[data-portfolio-component-type="DeprecatedRichText"] h6,
[data-portfolio-component-type="DeprecatedRichText"] li,
[data-portfolio-component-type="DeprecatedRichText"] ol,
[data-portfolio-component-type="DeprecatedRichText"] ul,
[data-portfolio-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--portfolio-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--portfolio-font-style, normal);
    font-weight: var(--portfolio-font-weight, 400);
    color: var(--portfolio-text-color, #000);
    font-size: var(--portfolio-font-size, 16px);
    letter-spacing: var(--portfolio-letter-spacing, 0);
    text-transform: var(--portfolio-text-transform, none);
    text-decoration: var(--portfolio-text-decoration, none);
    line-height: var(--portfolio-line-height, 1.2em);
    text-align: var(--portfolio-text-alignment, start);
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] p:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] div:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-portfolio-component-type="DeprecatedRichText"] .portfolio-image:not(:first-child) {
    margin-top: var(--portfolio-paragraph-spacing, 0);
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] a,
[data-portfolio-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--portfolio-link-font-family, var(--portfolio-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--portfolio-link-font-style, var(--portfolio-font-style, normal));
    font-weight: var(--portfolio-link-font-weight, var(--portfolio-font-weight, 400));
    color: var(--portfolio-link-text-color, var(--portfolio-text-color, #000));
    font-size: var(--portfolio-link-font-size, var(--portfolio-font-size, 16px));
    text-transform: var(--portfolio-link-text-transform, var(--portfolio-text-transform, none));
    text-decoration: var(--portfolio-link-text-decoration, var(--portfolio-text-decoration, none));
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] a:hover,
[data-portfolio-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--portfolio-link-hover-font-family, var(--portfolio-link-font-family, var(--portfolio-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--portfolio-link-hover-font-style, var(--portfolio-link-font-style, var(--portfolio-font-style, normal)));
    font-weight: var(--portfolio-link-hover-font-weight, var(--portfolio-link-font-weight, var(--portfolio-font-weight, 400)));
    color: var(--portfolio-link-hover-text-color, var(--portfolio-link-text-color, var(--portfolio-text-color, #000)));
    font-size: var(--portfolio-link-hover-font-size, var(--portfolio-link-font-size, var(--portfolio-font-size, 16px)));
    text-transform: var(--portfolio-link-hover-text-transform, var(--portfolio-link-text-transform, var(--portfolio-text-transform, none)));
    text-decoration: var(--portfolio-link-hover-text-decoration, var(--portfolio-link-text-decoration, var(--portfolio-text-decoration, none)));
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] a[data-portfolio-page-link-current],
[data-portfolio-component-type="DeprecatedRichText"] a[data-portfolio-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--portfolio-link-current-font-family, var(--portfolio-link-font-family, var(--portfolio-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--portfolio-link-current-font-style, var(--portfolio-link-font-style, var(--portfolio-font-style, normal)));
    font-weight: var(--portfolio-link-current-font-weight, var(--portfolio-link-font-weight, var(--portfolio-font-weight, 400)));
    color: var(--portfolio-link-current-text-color, var(--portfolio-link-text-color, var(--portfolio-text-color, #000)));
    font-size: var(--portfolio-link-current-font-size, var(--portfolio-link-font-size, var(--portfolio-font-size, 16px)));
    text-transform: var(--portfolio-link-current-text-transform, var(--portfolio-link-text-transform, var(--portfolio-text-transform, none)));
    text-decoration: var(--portfolio-link-current-text-decoration, var(--portfolio-link-text-decoration, var(--portfolio-text-decoration, none)));
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] a[data-portfolio-page-link-current]:hover,
[data-portfolio-component-type="DeprecatedRichText"] a[data-portfolio-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--portfolio-link-hover-font-family, var(--portfolio-link-current-font-family, var(--portfolio-link-font-family, var(--portfolio-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--portfolio-link-hover-font-style, var(--portfolio-link-current-font-style, var(--portfolio-link-font-style, var(--portfolio-font-style, normal))));
    font-weight: var(--portfolio-link-hover-font-weight, var(--portfolio-link-current-font-weight, var(--portfolio-link-font-weight, var(--portfolio-font-weight, 400))));
    color: var(--portfolio-link-hover-text-color, var(--portfolio-link-current-text-color, var(--portfolio-link-text-color, var(--portfolio-text-color, #000))));
    font-size: var(--portfolio-link-hover-font-size, var(--portfolio-link-current-font-size, var(--portfolio-link-font-size, var(--portfolio-font-size, 16px))));
    text-transform: var(--portfolio-link-hover-text-transform, var(--portfolio-link-current-text-transform, var(--portfolio-link-text-transform, var(--portfolio-text-transform, none))));
    text-decoration: var(--portfolio-link-hover-text-decoration, var(--portfolio-link-current-text-decoration, var(--portfolio-link-text-decoration, var(--portfolio-text-decoration, none))));
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] .portfolio-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] ul,
[data-portfolio-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,`
[data-portfolio-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`],h=e=>{let t=[`[data-portfolio-component-type="Text"] { cursor: inherit; }`,`[data-portfolio-component-text-autosized] * { white-space: pre; }`,`
[data-portfolio-component-type="Text"] > * {
    text-align: var(--portfolio-text-alignment, start);
}`,`
[data-portfolio-component-type="Text"] span span,
[data-portfolio-component-type="Text"] p span,
[data-portfolio-component-type="Text"] h1 span,
[data-portfolio-component-type="Text"] h2 span,
[data-portfolio-component-type="Text"] h3 span,
[data-portfolio-component-type="Text"] h4 span,
[data-portfolio-component-type="Text"] h5 span,
[data-portfolio-component-type="Text"] h6 span {
    display: block;
}`,`
[data-portfolio-component-type="Text"] span span span,
[data-portfolio-component-type="Text"] p span span,
[data-portfolio-component-type="Text"] h1 span span,
[data-portfolio-component-type="Text"] h2 span span,
[data-portfolio-component-type="Text"] h3 span span,
[data-portfolio-component-type="Text"] h4 span span,
[data-portfolio-component-type="Text"] h5 span span,
[data-portfolio-component-type="Text"] h6 span span {
    display: unset;
}`,`
[data-portfolio-component-type="Text"] div div span,
[data-portfolio-component-type="Text"] a div span,
[data-portfolio-component-type="Text"] span span span,
[data-portfolio-component-type="Text"] p span span,
[data-portfolio-component-type="Text"] h1 span span,
[data-portfolio-component-type="Text"] h2 span span,
[data-portfolio-component-type="Text"] h3 span span,
[data-portfolio-component-type="Text"] h4 span span,
[data-portfolio-component-type="Text"] h5 span span,
[data-portfolio-component-type="Text"] h6 span span,
[data-portfolio-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--portfolio-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--portfolio-text-decoration-style, solid) var(--portfolio-text-decoration, none) var(--portfolio-text-decoration-color, currentcolor) var(--portfolio-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--portfolio-text-decoration-skip-ink);
    --text-underline-offset: var(--portfolio-text-decoration-offset);
    line-height: var(--line-height);
}`,`
[data-portfolio-component-type="Text"] div div span,
[data-portfolio-component-type="Text"] a div span,
[data-portfolio-component-type="Text"] span span span,
[data-portfolio-component-type="Text"] p span span,
[data-portfolio-component-type="Text"] h1 span span,
[data-portfolio-component-type="Text"] h2 span span,
[data-portfolio-component-type="Text"] h3 span span,
[data-portfolio-component-type="Text"] h4 span span,
[data-portfolio-component-type="Text"] h5 span span,
[data-portfolio-component-type="Text"] h6 span span,
[data-portfolio-component-type="Text"] a {
    --font-family: var(--portfolio-font-family);
    --font-style: var(--portfolio-font-style);
    --font-weight: var(--portfolio-font-weight);
    --text-color: var(--portfolio-text-color);
    --letter-spacing: var(--portfolio-letter-spacing);
    --font-size: var(--portfolio-font-size);
    --text-transform: var(--portfolio-text-transform);
    --text-decoration: var(--portfolio-text-decoration-style, solid) var(--portfolio-text-decoration, none) var(--portfolio-text-decoration-color, currentcolor) var(--portfolio-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--portfolio-text-decoration-skip-ink);
    --text-underline-offset: var(--portfolio-text-decoration-offset);
    --line-height: var(--portfolio-line-height);
}`,`
[data-portfolio-component-type="Text"] a,
[data-portfolio-component-type="Text"] a div span,
[data-portfolio-component-type="Text"] a span span span,
[data-portfolio-component-type="Text"] a p span span,
[data-portfolio-component-type="Text"] a h1 span span,
[data-portfolio-component-type="Text"] a h2 span span,
[data-portfolio-component-type="Text"] a h3 span span,
[data-portfolio-component-type="Text"] a h4 span span,
[data-portfolio-component-type="Text"] a h5 span span,
[data-portfolio-component-type="Text"] a h6 span span {
    --font-family: var(--portfolio-link-font-family, var(--portfolio-font-family));
    --font-style: var(--portfolio-link-font-style, var(--portfolio-font-style));
    --font-weight: var(--portfolio-link-font-weight, var(--portfolio-font-weight));
    --text-color: var(--portfolio-link-text-color, var(--portfolio-text-color));
    --font-size: var(--portfolio-link-font-size, var(--portfolio-font-size));
    --text-transform: var(--portfolio-link-text-transform, var(--portfolio-text-transform));
    --text-decoration: var(--portfolio-link-text-decoration-style, var(--portfolio-text-decoration-style, solid)) var(--portfolio-link-text-decoration, var(--portfolio-text-decoration, none)) var(--portfolio-link-text-decoration-color, var(--portfolio-text-decoration-color, currentcolor)) var(--portfolio-link-text-decoration-thickness, var(--portfolio-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--portfolio-link-text-decoration-skip-ink, var(--portfolio-text-decoration-skip-ink));
    --text-underline-offset: var(--portfolio-link-text-decoration-offset, var(--portfolio-text-decoration-offset));
}`,`
[data-portfolio-component-type="Text"] a:hover,
[data-portfolio-component-type="Text"] a div span:hover,
[data-portfolio-component-type="Text"] a span span span:hover,
[data-portfolio-component-type="Text"] a p span span:hover,
[data-portfolio-component-type="Text"] a h1 span span:hover,
[data-portfolio-component-type="Text"] a h2 span span:hover,
[data-portfolio-component-type="Text"] a h3 span span:hover,
[data-portfolio-component-type="Text"] a h4 span span:hover,
[data-portfolio-component-type="Text"] a h5 span span:hover,
[data-portfolio-component-type="Text"] a h6 span span:hover {
    --font-family: var(--portfolio-link-hover-font-family, var(--portfolio-link-font-family, var(--portfolio-font-family)));
    --font-style: var(--portfolio-link-hover-font-style, var(--portfolio-link-font-style, var(--portfolio-font-style)));
    --font-weight: var(--portfolio-link-hover-font-weight, var(--portfolio-link-font-weight, var(--portfolio-font-weight)));
    --text-color: var(--portfolio-link-hover-text-color, var(--portfolio-link-text-color, var(--portfolio-text-color)));
    --font-size: var(--portfolio-link-hover-font-size, var(--portfolio-link-font-size, var(--portfolio-font-size)));
    --text-transform: var(--portfolio-link-hover-text-transform, var(--portfolio-link-text-transform, var(--portfolio-text-transform)));
    --text-decoration: var(--portfolio-link-hover-text-decoration-style, var(--portfolio-link-text-decoration-style, var(--portfolio-text-decoration-style, solid))) var(--portfolio-link-hover-text-decoration, var(--portfolio-link-text-decoration, var(--portfolio-text-decoration, none))) var(--portfolio-link-hover-text-decoration-color, var(--portfolio-link-text-decoration-color, var(--portfolio-text-decoration-color, currentcolor))) var(--portfolio-link-hover-text-decoration-thickness, var(--portfolio-link-text-decoration-thickness, var(--portfolio-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--portfolio-link-hover-text-decoration-skip-ink, var(--portfolio-link-text-decoration-skip-ink, var(--portfolio-text-decoration-skip-ink)));
    --text-underline-offset: var(--portfolio-link-hover-text-decoration-offset, var(--portfolio-link-text-decoration-offset, var(--portfolio-text-decoration-offset)));
}`,`
[data-portfolio-component-type="Text"].isCurrent a,
[data-portfolio-component-type="Text"].isCurrent a div span,
[data-portfolio-component-type="Text"].isCurrent a span span span,
[data-portfolio-component-type="Text"].isCurrent a p span span,
[data-portfolio-component-type="Text"].isCurrent a h1 span span,
[data-portfolio-component-type="Text"].isCurrent a h2 span span,
[data-portfolio-component-type="Text"].isCurrent a h3 span span,
[data-portfolio-component-type="Text"].isCurrent a h4 span span,
[data-portfolio-component-type="Text"].isCurrent a h5 span span,
[data-portfolio-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--portfolio-link-current-font-family, var(--portfolio-link-font-family, var(--portfolio-font-family)));
    --font-style: var(--portfolio-link-current-font-style, var(--portfolio-link-font-style, var(--portfolio-font-style)));
    --font-weight: var(--portfolio-link-current-font-weight, var(--portfolio-link-font-weight, var(--portfolio-font-weight)));
    --text-color: var(--portfolio-link-current-text-color, var(--portfolio-link-text-color, var(--portfolio-text-color)));
    --font-size: var(--portfolio-link-current-font-size, var(--portfolio-link-font-size, var(--portfolio-font-size)));
    --text-transform: var(--portfolio-link-current-text-transform, var(--portfolio-link-text-transform, var(--portfolio-text-transform)));
    --text-decoration: var(--portfolio-link-current-text-decoration-style, var(--portfolio-link-text-decoration-style, var(--portfolio-text-decoration-style, solid))) var(--portfolio-link-current-text-decoration, var(--portfolio-link-text-decoration, var(--portfolio-text-decoration, none))) var(--portfolio-link-current-text-decoration-color, var(--portfolio-link-text-decoration-color, var(--portfolio-text-decoration-color, currentcolor))) var(--portfolio-link-current-text-decoration-thickness, var(--portfolio-link-text-decoration-thickness, var(--portfolio-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--portfolio-link-current-text-decoration-skip-ink, var(--portfolio-link-text-decoration-skip-ink, var(--portfolio-text-decoration-skip-ink)));
    --text-underline-offset: var(--portfolio-link-current-text-decoration-offset, var(--portfolio-link-text-decoration-offset, var(--portfolio-text-decoration-offset)));
}`],i=[`[data-portfolio-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,`[data-portfolio-component-type="ScrollContentWrapper"] > * { position: relative; }`],a=[`[data-portfolio-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,`[data-portfolio-component-type="NativeScroll"] > * { position: relative; }`,`[data-portfolio-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,`[data-portfolio-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,`[data-portfolio-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,`[data-portfolio-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,`[data-portfolio-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,`[data-portfolio-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`],o=[`[data-portfolio-cursor="pointer"] { cursor: pointer; }`,`[data-portfolio-cursor="grab"] { cursor: grab; }`,`[data-portfolio-cursor="grab"]:active { cursor: grabbing; }`],s=[`[data-portfolio-component-type="Frame"] *, [data-portfolio-component-type="Stack"] * { pointer-events: auto; }`,`[data-portfolio-generated] * { pointer-events: unset }`],c=[`[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,`[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,`[data-hide-scrollbars="true"] { scrollbar-width: none; }`],h=`(background: -webkit-named-image(i))`,g=e=>e?[`body { ${l}: none; }`,`@supports ${h} and (not (grid-template-rows: subgrid)) { body { ${l}: transform; } }`]:[`body { ${l}: none; ${u}: none; }`],_=e=>e?[`body { ${d}: none; }`,`@supports ${h} and (not (position-area: top right)) { body { ${d}: filter; } }`]:[`body { ${d}: none; }`],v=e=>e?s:[],y=`@supports (not (overflow: clip)) {
        :root { ${f}: hidden; }
    }`,b=`@supports (corner-shape: superellipse(2)) { :root { ${p}: 1 } }`;return[...g(e),..._(e),`[data-portfolio-component-type] { position: absolute; }`,...t,...r,...m,`
[data-portfolio-component-type="Stack"]:not([data-portfolio-generated]) > *,
[data-portfolio-component-type="Stack"]:not([data-portfolio-generated]) > [data-portfolio-component-type] {
    position: relative;
}`,`
NavigationContainer
[data-portfolio-component-type="NavigationContainer"] > *,
[data-portfolio-component-type="NavigationContainer"] > [data-portfolio-component-type] {
    position: relative;
}`,...i,...a,`[data-portfolio-component-type="PageContentWrapper"] > *, [data-portfolio-component-type="PageContentWrapper"] > [data-portfolio-component-type] { position: relative; }`,`[data-portfolio-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,`[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,...o,...v(e),`.svgContainer svg { display: block; }`,`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,...c,y,`.portfolio-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,...n,b]},g=/* @__PURE__ */ o(()=>h(!1)),_=/* @__PURE__ */ o(()=>h(!0))})))()}v();export{_ as combinedCSSRulesForPreview,s as getCombinedCSSRules,c as injectComponentCSSRulesWithSheet};
