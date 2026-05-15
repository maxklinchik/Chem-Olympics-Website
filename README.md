# ChemOlympics — Nitrate Pollution Site

**GitHub Pages**: [https://maxklinchik.github.io/Chem-Olympics-Website/](https://maxklinchik.github.io/Chem-Olympics-Website/)

A small static website explaining nitrate pollution from common nitrogen fertilizers, its chemistry, impacts, and potential solutions.

**Preview:**
- Open `docs/index.html` in a browser, or serve the `docs/` folder locally.

**Quick local preview:**
```bash
# From the repository root
python3 -m http.server --directory docs 8000
# Then open http://localhost:8000 in your browser
```

**Tech:**
- Plain HTML, CSS, and JavaScript (no build step required).

**Project structure:**
- [docs/index.html](docs/index.html) — Home / entry page
- [docs/pages/chemical.html](docs/pages/chemical.html) — The chemical (nitrate) page
- [docs/pages/impacts.html](docs/pages/impacts.html) — Environmental impacts
- [docs/pages/pathway.html](docs/pages/pathway.html) — Pathways and diagrams
- [docs/pages/solutions.html](docs/pages/solutions.html) — Mitigation and solutions
- [docs/pages/references.html](docs/pages/references.html) — Sources and references
- [docs/css/styles.css](docs/css/styles.css) — Site stylesheet
- [docs/js/charts.js](docs/js/charts.js) — Chart utilities
- [docs/js/pathway.js](docs/js/pathway.js) — Pathway interactions
- [docs/assets/images/](docs/assets/images/) — Images and assets

**How to edit content:**
- Edit the HTML files under `docs/pages/` and the main `docs/index.html`.
- Update styles in `docs/css/styles.css` and scripts in `docs/js/`.

**Suggested next steps:**
- Add a small CI/CD workflow to deploy the `docs/` folder (GitHub Pages, Netlify, Vercel).
- Add a CONTRIBUTING.md if you want external contributions.

**License:**
This repository currently has no license file. Add a `LICENSE` if you want to set reuse terms (MIT recommended for permissive use).

---
Generated README summarizing the static site and how to preview it locally.
