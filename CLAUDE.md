# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is Patrick Biber's personal static website, deployed at [biber.solar](https://biber.solar). It's a playground for web-based tools and notes around renewable energy, solar/PV consulting, and Linux/IT — not a build-tooled application. There is no bundler. Content is primarily German (`lang="de"`).

The site is hosted on an OVH VPS in Strasbourg (per the footer in `index.html`).

## Working with this repo

- There is no build step or bundler. Edit HTML/CSS files directly and open them in a browser (or serve the directory with any static file server) to preview.
- A minimal `package.json` exists solely to run tests: `npm test` (equivalent to `node --test`, Node's built-in test runner — no external test framework/dependencies). Test files live in `tests/*.test.js` and cover pure-logic JS modules extracted from the page scripts (e.g. `feedback.js`). Not every script has (or needs) tests — only ones with non-trivial logic worth unit-testing; DOM wiring itself isn't tested.
- `index.html` is the main/only real page currently linked from navigation. It's a single-page layout with anchor-linked sections in document order: `#start`, `#contact`, `#Solar-Handbook`, `#training`, `#EnergyLab`, `#links`, `#Videos`, `#chatgpt`, `#feedback`. The nav (`<ul class="menu">`) must list exactly these ids — when adding/removing/renaming a section, update the nav in the same change, since nothing else enforces that link.
- `geo.html`, `berater.html` and `shop.html` are standalone auxiliary tools/pages, not part of the main nav flow. `shop.html` is linked from a `link-card` in `index.html`'s `#links` section instead.
- `server.js` is a small Express backend. It serves the chatbot proxy (`/api/chat`, proxies to OpenAI's `gpt-3.5-turbo` using an `OPENAI_API_KEY` from `.env`) and the Balkonkraftwerk shop's checkout endpoints (`/api/products`, `/api/create-checkout-session`, using Stripe Checkout with a `STRIPE_SECRET_KEY` from `.env`). Also serves the whole repo as static files (`express.static`) for local dev via `npm start`; in production this is likely superseded by the VPS's own static file serving, with only `/api/*` reverse-proxied to this process. **The chatbot part is currently unused/disabled**: its corresponding frontend code in `index.html` (the `#chatbot` section and its `<script>`) is commented out. The shop part is active. `package.json` declares `express`, `axios`, `dotenv`, `stripe` as dependencies — run `npm install` before `npm start`. Copy `.env.example` to `.env` and fill in real keys.
- Large binary assets (images, the `.MOV` video) live at repo root alongside code — this is intentional for this project's simple structure, not an oversight.

## Architecture notes

- **Navigation/scroll behavior** (`navigator.js`): handles the hamburger menu toggle, computes header height into a `--header-h` CSS custom property (used for scroll offset), and implements manual smooth-scroll-with-offset for in-page anchor links, including correcting the scroll position on initial load when a URL hash is present. Any change to header height/markup should be checked against this offset logic.
- **Styling**: `biberstyle.css` is the primary stylesheet used by `index.html`. `style.css` is a separate, older/simpler stylesheet used only by `berater.html`. Don't assume they're interchangeable.
- **`asciiBeaver.js`**: a trivial two-frame ASCII animation injected into `#asciiBeaver`, purely decorative.
- **`feedback.js`**: powers the `#feedback` section's form. Exposes a pure `buildFeedbackMailto(message, options)` function (no DOM access, tested in `tests/feedback.test.js`) that builds a `mailto:` link, plus a `DOMContentLoaded` handler that wires it to `#feedback-form`/`#feedback-input`. Kept dependency-free (no backend) since `server.js` is disabled — follow this pure-function-plus-thin-DOM-wiring pattern for any future scripts that need tests.
- **`geo.html`**: a self-contained Swiss address geocoder — queries the `api3.geo.admin.ch` SearchServer API, converts WGS84 lon/lat to LV95 (Swiss coordinate system) via an approximate formula, and builds links/iframes into `geo.zh.ch` cadastral maps and the federal solar-suitability map (`map.geo.admin.ch`). All logic is inline in the page; no shared JS.
- **Legal pages** (`impressum_de.html`, `datenschutzerklaerung_de.html`): German-language imprint and privacy policy, standalone static pages.
- **Balkonkraftwerk shop** (`shop.html`, `shop.js`, `shop.css`, `products.json`, `shop-success.html`, `shop-cancel.html`): product catalog lives in `products.json` (single source of truth, read by both the frontend via `fetch('products.json')` and the backend for price-authoritative checkout). `shop.js` follows the same pure-function-plus-thin-DOM-wiring pattern as `feedback.js`: cart functions (`addToCart`, `setQuantity`, `removeFromCart`, `cartItemCount`, `calculateCartTotal`, `cartToLineItems`) are pure and tested in `tests/cart.test.js`; the cart itself lives in `localStorage`. Checkout POSTs the cart to `/api/create-checkout-session` (see `server.js`), which recomputes prices from `products.json` server-side (never trusts client-supplied prices) and redirects to a Stripe-hosted Checkout session. Product data, prices and copy are currently placeholders pending real inventory — check with Patrick before treating them as live. No Swiss e-commerce legal texts (AGB, Widerrufsrecht, MWST handling) have been added yet.
- **`.gitignore`** excludes `.env` and `node_modules/` — assume any other file present is meant to be tracked (including large media files).

## Content conventions

- Keep new content in German unless a page is explicitly bilingual/English (matches existing tone: direct, first-person, informal "du" address).
- Affiliate/sponsored links (e.g. Proton) are marked with `rel="nofollow sponsored noopener"` and an explicit disclosure note (`class="note"`) — follow this pattern for any new sponsored links.
- External links in general use `rel="nofollow noopener"` or `rel="noopener"` and `target="_blank"`.
