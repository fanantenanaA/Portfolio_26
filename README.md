# Portfolio Marc Fanantenana — Next.js

Portfolio converti en **Next.js (App Router)**.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir : http://localhost:3000

## Build production

```bash
npm run build
npm start
```

## Déploiement

Le projet est prêt pour Vercel, Netlify (avec support Next.js) ou un serveur Node.js.

## Structure

- `app/layout.jsx` : métadonnées et layout global
- `app/page.jsx` : page d'accueil
- `app/globals.css` : styles du portfolio
- `components/Portfolio.jsx` : portfolio interactif (menu, scroll, animations)
- `public/assets/marc-fanantenana.jpeg` : portrait
- `public/CV-Marc-Fanantenana.pdf` : CV téléchargeable

## Personnalisation

Pour ajouter de vrais projets, créez une section `Projets` dans `components/Portfolio.jsx` avec vos captures, liens et technologies utilisées.
