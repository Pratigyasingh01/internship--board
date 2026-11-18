# Launchpad — Internship Board

A responsive, accessible internship listing interface built with semantic HTML, CSS, and vanilla JavaScript (no framework or build step).

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a browser. For a local server, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Features
- Responsive layouts for mobile, tablet, and desktop.
- Semantic landmarks, labelled form controls, skip link, visible keyboard focus, and live result announcements.
- Search across role, company, domain, and location.
- Domain filter with clear/reset behavior.
- Reusable internship data array and DOM card rendering.
- Empty-results and error/retry states.
- Reduced-motion preference support.
- No framework or external API required.

## Data and demo note
The eight internship records are fictional sample data. Replace the records in `app.js` with verified opportunities before using this as a live job board. The sample “View opportunity” links are placeholders and should be replaced with real application URLs.

## Acceptance checklist
- [x] Plan semantic page structure and reusable internship data.
- [x] Search and domain filters.
- [x] Empty and error states.
- [x] Keyboard navigation and form labels.
- [x] Responsive layouts.
- [ ] Add real internship records and application links.
- [ ] Capture desktop and mobile screenshots and add them to `screenshots/`.
- [ ] Publish repository and deployed preview URL.

## Deploy with GitHub Pages
1. Create a public GitHub repository named `internship-board`.
2. Upload the contents of this folder (keep `index.html`, `styles.css`, and `app.js` at the repository root).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. After GitHub Pages finishes, the preview will be available at:
   `https://YOUR-GITHUB-USERNAME.github.io/internship-board/`

## Screenshots for README
After opening the deployed page, capture one desktop view showing the hero and listing cards, and one mobile view showing the filters and cards. Save them as `screenshots/desktop.png` and `screenshots/mobile.png`, then add:

```md
![Desktop preview](screenshots/desktop.png)
![Mobile preview](screenshots/mobile.png)
```
