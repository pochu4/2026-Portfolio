# Fonts

The site is set to **PP Mori** (Pangram Pangram). It is a commercial typeface,
so the font files are not committed here — drop your licensed webfont files into
this folder using the exact filenames below.

```
PPMori-ExtraLight.woff2   PPMori-ExtraLight.woff
PPMori-Book.woff2         PPMori-Book.woff
PPMori-Regular.woff2      PPMori-Regular.woff
PPMori-SemiBold.woff2     PPMori-SemiBold.woff
```

Notes:

- `.woff2` is what browsers will actually use; the `.woff` is a fallback and is
  optional if you only received `.woff2`.
- If your license package ships `.otf`/`.ttf` only, convert to `.woff2` first
  (e.g. the Pangram Pangram webfont download, or `fonttools`).
- You do not need every weight. Any file that is missing simply falls back to
  the next available weight — `PPMori-Regular` is the one that matters most and
  is preloaded in `index.html`.
- The `@font-face` declarations live at the top of `src/index.css`. If your
  filenames differ, edit them there rather than renaming your files.

Until the files are added, the site renders in the system sans-serif fallback.
