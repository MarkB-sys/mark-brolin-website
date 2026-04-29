# Website Summary

## Purpose

This is a static personal/professional website for Mark Brolin, presenting his work in geostrategy, sovereign trend analysis, strategic foresight, speaking, advisory services, publications, and media commentary.

## Features

- **Home page (`index.html`)**: Introduces Mark's geostrategy offer for senior decision-makers, highlights the practical value leaders gain, previews selected media insights, and links visitors to speaking topics, publications, and contact.
- **Speaking page (`speaking.html`)**: Presents strategic briefing and keynote topics, including the Consensus Trap, social media and polarisation, Middle East risk, Russia risk, US decline narratives, European stagnation, and populism.
- **Publications & Media page (`publications.html`)**: Showcases Mark's book, media commentary, selected articles, TV appearances, and external links to publications and interviews.
- **About page (`about.html`)**: Summarizes Mark's background, experience, analytical approach, media thought leadership, and current advisory focus.
- **Contact page (`contact.html`)**: Describes speaking and advisory enquiries, lists speaker representation, notes the Valona Intelligence partnership, and includes a Netlify-powered contact form with honeypot spam protection.
- **Shared navigation and footer**: Every page uses a consistent sticky header, page navigation, current-page highlighting, and footer.
- **SEO and sharing metadata**: Pages include titles, descriptions, Open Graph metadata, Twitter card metadata, favicon links, a web manifest, and Google site verification.
- **Analytics**: Google Analytics is loaded on each page through the `gtag.js` snippet.
- **Responsive visual design**: The site uses a dark theme, gradient accents, card layouts, responsive grids, and optimized image presentation.
- **Static assets**: Images, favicons, touch icons, sitemap, and manifest files support presentation, search indexing, and install-like browser behavior.

## Architecture

The website is a simple static HTML/CSS/JavaScript site with no build step or application framework.

- **HTML pages** live at the project root and define each route directly: `index.html`, `speaking.html`, `publications.html`, `about.html`, and `contact.html`.
- **Shared styling** is centralized in `css/styles.css`, using CSS custom properties for theme colors and reusable classes for layout, cards, grids, buttons, typography, forms, images, and responsive behavior.
- **Shared JavaScript** lives in `js/script.js`. It runs after page load, adds current-page navigation highlighting when needed, and supports an optional draggable visual slider if matching elements are present.
- **Images and icons** are static files referenced directly by the HTML and CSS.
- **Form handling** relies on Netlify form attributes in `contact.html`; there is no custom backend code in the repository.
- **Search and discovery files** include `sitemap.xml`, `site.webmanifest`, favicon files, Open Graph/Twitter metadata, and structured data on the home page.

## Deployment Model

Because the site is fully static, it can be hosted by any static hosting provider. The contact form is configured for Netlify, so form submissions depend on Netlify's static form processing when deployed there.
