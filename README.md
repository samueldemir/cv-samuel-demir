# Samuel Demir – Website

Lokale Kopie von https://samueldemir.framer.website/ mit den originalen Bildern,
Schriften, responsiven Layouts und ausgelieferten Framer-Animationen.

## Lokal öffnen

Im Projektverzeichnis ausführen:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Anschließend http://127.0.0.1:8080 öffnen. Mit `Ctrl+C` beenden.
Die Seite über einen Webserver öffnen; ES-Module funktionieren bei direktem
Öffnen von `index.html` über `file://` nicht zuverlässig.

## Dateien

- `index.html`: Originalinhalte, Layout und Einstiegsseite.
- `assets`: lokal gespeicherte Bilder, Schriften und JavaScript-Dateien.
- `assets/manifest.json`: Zuordnung der Original-URLs zu den lokalen Dateien.
- `tools/mirror.py`: aktualisiert die Kopie von der veröffentlichten Vorlage.

Für statisches Hosting den Inhalt dieses Ordners bereitstellen. Es sind weder
ein Build-Schritt noch Node.js-Abhängigkeiten erforderlich. `.mjs`-Dateien
müssen mit einem JavaScript-MIME-Type ausgeliefert werden.

## Aktualisieren

```bash
python3 tools/mirror.py
```

Benötigt Python 3, `curl` und Internetzugriff. Die Aktualisierung überschreibt
`index.html` und die zugehörigen Ressourcen mit der dann veröffentlichten Version.

Die Kopie verwendet den veröffentlichten Framer-Code; sie ist kein bearbeitbares
Framer-Projekt. Der gehostete Framer-Editor und das externe Analytics-Skript
werden nicht geladen. Externe Links, etwa zum Lebenslauf, bleiben erhalten.

## Geprüft

In Chrome bei 1440, 1000 und 390 Pixel Bildschirmbreite geprüft: Schreibanimation,
Zähler, Scroll-Einblendungen, Social-Media-Symbole und „Load More“. Auch nach dem
Nachladen aller Projekte gab es bei gesperrten externen Netzwerkzugriffen keine
Browserfehler, fehlenden Bilder oder horizontalen Überläufe.
