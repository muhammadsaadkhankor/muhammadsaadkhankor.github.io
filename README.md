# muhammadsaadkhankor.github.io

Personal academic portfolio — a **no-build React app** (React 18 + HTM via CDN). No npm, no bundler, no Jekyll. Just static files.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell, loads React/ReactDOM/HTM from CDN |
| `data.js` | **All site content** — edit this to update profile, publications, experience, etc. |
| `app.js` | React components (sidebar, publications w/ filters, experience, etc.) |
| `styles.css` | All styling |
| `avatar.jpeg` | Profile photo |
| `serve.js` | Optional tiny local server |

## Run locally

- Easiest: open `index.html` directly in a browser — it just works.
- Or serve it: `node serve.js` → http://localhost:8000 (or use VS Code Live Server, `python -m http.server`, etc.)

## Deploy

This repo is `muhammadsaadkhankor.github.io`, so GitHub Pages serves it automatically from the `main` branch root. Just push.

## Updating content

Edit `data.js` — publications, news, experience, honors, education are all plain JS arrays. No other files need to change for content updates.
