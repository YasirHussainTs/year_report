# 360Medicare · My 1 Year (Yasir Hussain)

Static website. No framework, no build step. Pure HTML, CSS and JS, ready for Vercel.

```
360medicare-1-year-review/
├─ public/                  ← the only folder that goes live
│  ├─ index.html
│  ├─ robots.txt            (blocks search engines)
│  └─ assets/
│     ├─ css/style.css
│     ├─ js/data.js         ← all numbers and text lists (edit here)
│     ├─ js/app.js          ← charts, animations, lightbox
│     └─ img/*.webp         ← screenshots (private details blurred)
├─ data/                    ← CSV files behind the numbers (not deployed)
├─ docs/                    ← what is missing, 2027 plan (not deployed)
├─ tools/prep_images.py     ← blurs and compresses screenshots
├─ vercel.json              ← serves `public/`, adds noindex headers
└─ .gitignore
```

## Put it on GitHub, then Vercel
1. Create a **private** repository on GitHub (the site has internal revenue numbers).
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "1 year review website"
   git branch -M main
   git remote add origin https://github.com/<your-user>/360medicare-1-year-review.git
   git push -u origin main
   ```
3. On Vercel: **Add New → Project → Import** the repository. Leave Framework as *Other*. `vercel.json` already sets the output folder to `public`. Click **Deploy**.
4. Optional but recommended: Vercel → Project → Settings → Deployment Protection → Password Protection.

Every `git push` to `main` redeploys the site.

## Edit
- Numbers, systems, SOPs, reports, plan: `public/assets/js/data.js`
- Text blocks and sections: `public/index.html`
- Look: `public/assets/css/style.css`

## Preview on your computer
Open `public/index.html` in the browser, or run `npx serve public`.

## Screenshots
Never commit the original screenshots. They show staff names, phone numbers and emails. Use `tools/prep_images.py` (it blurs the marked areas) and commit only the output in `public/assets/img/`.
