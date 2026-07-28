# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is Patrick Biber's personal static website, deployed at [biber.solar](https://biber.solar). It's a playground for web-based tools and notes around renewable energy, solar/PV consulting, and Linux/IT — not a build-tooled application. There is no `package.json`, no bundler, and no test suite. Content is primarily German (`lang="de"`).

The site is hosted on an OVH VPS in Strasbourg (per the footer in `index.html`).

## Working with this repo

- There is no build step, package manager, or test command. Edit HTML/CSS/JS files directly and open them in a browser (or serve the directory with any static file server) to preview.
- `index.html` is the main/only real page currently linked from navigation. It's a single-page layout with anchor-linked sections (`#start`, `#contact`, `#chatbot`, `#linux`, `#proton`, `#links`, plus ad hoc sections like `#Lokalwahlen`, `#Speicher`, `#Videos`).
- `geo.html` and `berater.html` are standalone auxiliary tools/pages, not part of the main nav flow.
- `server.js` is a small Express backend for a chatbot (`/api/chat`, proxies to OpenAI's `gpt-3.5-turbo` using an `OPENAI_API_KEY` from `.env`, loaded via `dotenv`). **This is currently unused/disabled**: its corresponding frontend code in `index.html` (the `#chatbot` section and its `<script>`) is commented out. There's no `package.json`, so `npm install` won't work as-is — dependencies (`express`, `axios`, `dotenv`) would need to be added/installed if this is ever revived.
- Large binary assets (images, the `.MOV` video) live at repo root alongside code — this is intentional for this project's simple structure, not an oversight.

## Architecture notes

- **Navigation/scroll behavior** (`navigator.js`): handles the hamburger menu toggle, computes header height into a `--header-h` CSS custom property (used for scroll offset), and implements manual smooth-scroll-with-offset for in-page anchor links, including correcting the scroll position on initial load when a URL hash is present. Any change to header height/markup should be checked against this offset logic.
- **Styling**: `biberstyle.css` is the primary stylesheet used by `index.html`. `style.css` is a separate, older/simpler stylesheet used only by `berater.html`. Don't assume they're interchangeable.
- **`asciiBeaver.js`**: a trivial two-frame ASCII animation injected into `#asciiBeaver`, purely decorative.
- **`geo.html`**: a self-contained Swiss address geocoder — queries the `api3.geo.admin.ch` SearchServer API, converts WGS84 lon/lat to LV95 (Swiss coordinate system) via an approximate formula, and builds links/iframes into `geo.zh.ch` cadastral maps and the federal solar-suitability map (`map.geo.admin.ch`). All logic is inline in the page; no shared JS.
- **Legal pages** (`impressum_de.html`, `datenschutzerklaerung_de.html`): German-language imprint and privacy policy, standalone static pages.
- **`.gitignore`** only excludes `.env` — assume any other file present is meant to be tracked (including large media files).

## Content conventions

- Keep new content in German unless a page is explicitly bilingual/English (matches existing tone: direct, first-person, informal "du" address).
- Affiliate/sponsored links (e.g. Proton) are marked with `rel="nofollow sponsored noopener"` and an explicit disclosure note (`class="note"`) — follow this pattern for any new sponsored links.
- External links in general use `rel="nofollow noopener"` or `rel="noopener"` and `target="_blank"`.
