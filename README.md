# carlasrebot.github.io

Personal academic website of Carla Srebot. Plain static HTML + CSS — no Jekyll,
no theme, no build step. GitHub Pages serves the files exactly as they are in
this repository (`.nojekyll` disables Jekyll processing).

## Structure

```
index.html            Home page  ->  https://carlasrebot.github.io/
research/index.html   Research   ->  /research/
teaching/index.html   Teaching   ->  /teaching/
cv/index.html         CV         ->  /cv/
404.html              Not-found page
assets/css/style.css  The whole stylesheet
assets/js/site.js     Mobile nav toggle, footer year, abstract toggles
assets/images/        Portrait, header photo (P001.jpg), favicons
assets/files/         CV and working paper PDFs
archive/              The previous Minimal Mistakes Jekyll site, kept for reference
```

## Editing

Each page is a self-contained HTML file. The navigation bar is repeated in every
page (four copies) — if you add or rename a page, update the `<ul class="nav-links">`
block in all of them.

Design tokens (colours, fonts, widths) live in the `:root` block at the top of
`assets/css/style.css`.

Two deliberate details:

- The home page shows **no name in the top-left corner**; every other page does.
- The portrait is rectangular (`border-radius: 8px`), not a circle.

## Preview locally

```
python -m http.server 8000
```

then open <http://localhost:8000>.

## The archive

`archive/` holds the previous site (Minimal Mistakes Jekyll theme) exactly as it
was: `_config.yml`, `_pages/`, `_layouts/`, `_includes/`, `_sass/`, `_data/`,
`assets/css/main.scss`, `assets/js/`, and the Ruby/Node tooling. Nothing in it
is served as a page; it is there so the old content and styling stay recoverable.
