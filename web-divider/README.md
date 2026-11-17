# Web Divider – Agency Website

A 5-page website for **Web Divider**, a digital marketing agency, built with **React + Vite** and **React Router**, ready to deploy on **Vercel**.

| Page | Address | File |
|---|---|---|
| Home | `/` | `src/pages/Home.jsx` |
| About Us | `/about` | `src/pages/About.jsx` |
| Services | `/services` | `src/pages/Services.jsx` |
| Our Work | `/work` | `src/pages/Work.jsx` |
| Contact Us | `/contact` | `src/pages/Contact.jsx` |

## Run it on your computer

You need [Node.js](https://nodejs.org) 20.19 or newer.

```bash
npm install
npm run dev        # opens a local preview at http://localhost:5173
npm run build      # makes the production version in /dist
npm run preview    # serves /dist so you can check it
```

## Deploy to Vercel

**Option A – with GitHub (recommended, auto-updates):**
1. Create a new GitHub repository and upload everything in this folder.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import that repository.
3. Vercel detects Vite automatically (Build command `npm run build`, Output `dist`). Click **Deploy**.

**Option B – with the Vercel CLI:**
```bash
npm install -g vercel
vercel          # follow the prompts, then
vercel --prod
```

`vercel.json` already sends every address (like `/about`) to the app, so refreshing any page or opening a direct link works.

## Project structure

```
index.html              page shell, fonts, default SEO tags
public/favicon.svg      site icon
src/main.jsx            starts the app with the router
src/App.jsx             the 5 routes (each page loads only when visited)
src/pages/              one file per page
src/components/         ProjectArt (portfolio visuals), PageMeta (titles), ScrollManager
src/styles/site.css     all styles and animations, scoped per page
src/pageMeta.json       each page's title and description
vercel.json             Vercel settings
```

## Things to update before going live

- **Contact details** – replace `[your@email.com]`, `[YOUR BUSINESS EMAIL]`, `[+00 00000 00000]` and `[Your City, Country]` (footer on every page, and the Contact page).
- **Social links** – the Instagram / LinkedIn / X / Facebook buttons use `href="#"`. Add your profile URLs.
- **Privacy Policy** – the link in the contact form is a placeholder.
- **Statistics** on the Home page show `[00]` placeholders.
- **Testimonials** and **brand names** on the Home page are labelled sample content.
- **About Us headline** currently reads "let's covert it to an app" – you may want "convert".

## Connecting the contact form

The form validates everything but runs in **demo mode** (nothing is sent) until you connect a service:

1. Create a form endpoint, for example with [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. In `src/pages/Contact.jsx`, find `config()` near the top and paste the URL:
   ```js
   inquiryEndpoint: 'https://formspree.io/f/your-id',
   ```
3. Redeploy. Visitors will then see the "Thank you for reaching out!" message after a successful send, or an error message if sending fails.

## Portfolio projects

The 8 projects on Our Work are **concept / demo projects**. To add or edit one, change the list in `projects()` in `src/pages/Work.jsx`. Filters, cards and the detail view update automatically.
