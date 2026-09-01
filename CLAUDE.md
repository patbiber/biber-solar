# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is Patrick Biber's personal static website, deployed at [biber.solar](https://biber.solar). It's a playground for web-based tools and notes around renewable energy, solar/PV consulting, and Linux/IT — not a build-tooled application. There is no bundler. Content is primarily German (`lang="de"`).

The site is hosted on an OVH VPS in Strasbourg (per the footer in `index.html`).

## Working with this repo

- There is no build step or bundler. Edit HTML/CSS files directly and open them in a browser (or serve the directory with any static file server) to preview.
- A minimal `package.json` exists solely to run tests: `npm test` (equivalent to `node --test`, Node's built-in test runner — no external test framework/dependencies). Test files live in `tests/*.test.js` and cover pure-logic JS modules extracted from the page scripts. Not every script has (or needs) tests — only ones with non-trivial logic worth unit-testing; DOM wiring itself isn't tested. For any future script needing tests, follow a pure-function-plus-thin-DOM-wiring pattern: export testable logic with no DOM access, and wire it to the page in a small `DOMContentLoaded` handler.
- `index.html` is the main/only real page currently linked from navigation. It's a single-page layout with anchor-linked sections in document order: `#start`, `#contact`, `#Solar-Handbook`, `#Verkaufsleitfaden`, `#training`, `#EnergyLab`, `#links`, `#Videos`, `#feedback`. The nav (`<ul class="menu">`) must list exactly these ids — when adding/removing/renaming a section, update the nav in the same change, since nothing else enforces that link.
- `#feedback` links out to a GitHub Issues feature-request form (`.github/ISSUE_TEMPLATE/feature_request.yml`, plus `config.yml` pointing the "blank issue" contact link at `mailto:patrick@biber.solar`) instead of an in-page form — there is no feedback-handling JS on the page.
- `geo.html` and `berater.html` are standalone auxiliary pages, not part of the main nav flow. `verkaufsleitfaden.html` is also standalone but does get its own teaser section (`#Verkaufsleitfaden`) and nav entry in `index.html`, like `#Solar-Handbook` — not listed again under `#links` to avoid duplication.
- There is **no backend**. The site is pure static files — no `server.js`, no Node process, no `/api/*` routes. A chatbot (`/api/chat`, OpenAI-backed) and a pv-magazine.de news feed (`/api/pv-news`) existed at points but were removed as unneeded — don't reintroduce a backend without a concrete reason; if one's ever needed again, `git log` has the removed `server.js`/`ecosystem.config.js` for reference.
- Large binary assets (images, the `.MOV` video) live at repo root alongside code — this is intentional for this project's simple structure, not an oversight.

## Architecture notes

- **Navigation/scroll behavior** (`navigator.js`): handles the hamburger menu toggle, computes header height into a `--header-h` CSS custom property (used for scroll offset), and implements manual smooth-scroll-with-offset for in-page anchor links, including correcting the scroll position on initial load when a URL hash is present. Any change to header height/markup should be checked against this offset logic.
- **Styling**: `biberstyle.css` is the primary stylesheet used by `index.html`. `style.css` is a separate, older/simpler stylesheet used only by `berater.html`. Don't assume they're interchangeable.
- **`asciiBeaver.js`**: a trivial two-frame ASCII animation injected into `#asciiBeaver`, purely decorative.
- **`#training`**: covers both the full Solarteur knowledge base (training.biber.solar, MkDocs site) and the formula collection within the same GitHub-versioned content (`solartech/basics.md`) as one combined article — states its content and target audience explicitly rather than splitting the formula link out into `#links`.
- **`geo.html`**: a self-contained Swiss address geocoder — queries the `api3.geo.admin.ch` SearchServer API, converts WGS84 lon/lat to LV95 (Swiss coordinate system) via an approximate formula, and builds links/iframes into `geo.zh.ch` cadastral maps and the federal solar-suitability map (`map.geo.admin.ch`). All logic is inline in the page; no shared JS.
- **`verkaufsleitfaden.html`**: a self-contained sales guide for solar consultants (Fachberater Solar) — negotiation/argumentation techniques (PLN model, question types, closing signals), synthesized from an external sales trainer's script and a workshop flipchart photo protocol (both credited in the footer). Same standalone single-file style as `solar-handbook/index.html` (own inline `<style>`, not `biberstyle.css`), but lives at the repo root rather than in a subfolder.
- **Legal pages** (`impressum_de.html`, `datenschutzerklaerung_de.html`): German-language imprint and privacy policy, standalone static pages.
- **`.gitignore`** excludes `.env` and `node_modules/` — assume any other file present is meant to be tracked (including large media files).

## Content conventions

- Keep new content in German unless a page is explicitly bilingual/English (matches existing tone: direct, first-person, informal "du" address).
- Affiliate/sponsored links (e.g. Proton) are marked with `rel="nofollow sponsored noopener"` and an explicit disclosure note (`class="note"`) — follow this pattern for any new sponsored links.
- External links in general use `rel="nofollow noopener"` or `rel="noopener"` and `target="_blank"`.
