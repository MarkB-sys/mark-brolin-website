# Website Summary

## Purpose

This is a static personal and professional website for Mark Brolin, presenting independent geopolitical intelligence across speaking, advisory work, publications and media.

## Pages

- **Home (`index.html`)**: Positions Mark around geopolitics, AI and power; presents the decision benefits, signature talks, The Doom Trap, The Consensus Trap, selected media analysis and direct enquiry CTA.
- **Speaking (`speaking.html`)**: Presents four signature talks, the tailored Consensus Trap strategy session, engagement formats and tailored geopolitical briefings.
- **Advisory (`advisory.html`)**: Presents Executive Geopolitical Briefings, The Consensus Trap Stress Test and Ongoing Geostrategic Counsel.
- **Publications & Media (`publications.html`)**: Showcases Mark's book, endorsements, media commentary, selected articles and external interviews.
- **About (`about.html`)**: Covers Mark's background, realist approach, experience, media claims, books and endorsements.
- **Contact (`contact.html`)**: Leads with bookable engagements, lists representation, notes the Valona Intelligence partnership and includes a Netlify-powered contact form with honeypot spam protection.

## Architecture

The website is a static HTML/CSS/JavaScript site with no build step or application framework.

- **HTML pages** live at the project root and define each route directly.
- **Shared styling** is centralized in `css/styles.css`, using a navy, warm gold and stone palette with responsive grids, editorial typography, accessible focus states and reusable content components.
- **Shared JavaScript** lives in `js/script.js` and highlights the current navigation item after page load.
- **Images and icons** are static files referenced directly by the HTML and CSS.
- **Form handling** relies on Netlify form attributes in `contact.html`; there is no custom backend code in the repository.
- **Search and discovery files** include page metadata, Open Graph/Twitter metadata, favicon files, a web manifest and a sitemap covering all six pages.

## Deployment Model

Because the site is fully static, it can be hosted by any static hosting provider. The contact form is configured for Netlify, so form submissions depend on Netlify's static form processing when deployed there.
