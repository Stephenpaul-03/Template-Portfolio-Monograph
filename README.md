# Alex Morgan - Monograph Portfolio

An expressive, single-page portfolio for a designer, researcher, and visual storyteller. It is built to make thoughtful work feel approachable: part case-study index, part personal introduction, part invitation to start a conversation.

It is also deliberately a little theatrical. The page has oversized type, soft motion, a cursor glow, playful project artwork, a fixed contact footer, and a dark mode toggle. In other words: it takes its work seriously, but not itself.

> This project started as a portfolio template and has been shaped into a complete monograph-style portfolio experience. The sample content describes Alex Morgan, but the structure is ready to be adapted to a real person, practice, studio, or wonderfully mysterious internet entity.

## What this is

This is a React + TypeScript portfolio site powered by Vite. It is a frontend-only application with content stored in one JSON file, so the identity and copy can be changed without hunting through JSX like a detective in a very small, very stylish crime drama.

The page is organized into five main experiences:

1. **Hero** - name, discipline, randomly selected introduction, portrait area, scroll prompt, and résumé download.
2. **About** - a personal statement, manifesto, and three clickable areas of practice.
3. **Journey** - a timeline for experience plus an education block.
4. **Selected work** - project cards with custom visual treatments and detail modals.
5. **Contact footer** - a large call to action, social links, résumé link, attribution, and copyright information.

The layout is responsive and changes substantially on smaller screens rather than simply shrinking until everything becomes a typography sandwich.

## Why it was made this way

The design is built around a simple idea: a portfolio should communicate how someone thinks, not only display a list of things they have made.

The monograph layout gives the content room to breathe while presenting a cohesive point of view. Large type establishes personality quickly, while the timeline and project notes provide enough structure for visitors who want more than a decorative landing page. Motion is used to guide attention-revealing sections as they enter the viewport, introducing the hero in stages, and making project details feel connected to the work itself.

The visual language intentionally combines:

- **Warm paper tones** for the main content.
- **Deep green** for the shell and contact layer.
- **A restrained dark theme** for lower-light browsing.
- **Large typographic gestures** for confidence and emphasis.
- **Small interactive details** for curiosity: the spinning star, cursor glow, hover states, animated reveals, and modal transitions.

The result is meant to feel like a personal monograph that learned how to respond to a mouse pointer.

## Tech stack

- [React](https://react.dev/) 19 - component-based UI.
- [TypeScript](https://www.typescriptlang.org/) - typed component and data development.
- [Vite](https://vite.dev/) - development server and production bundler.
- [Tailwind CSS](https://tailwindcss.com/) 4 - utility layer and base styles.
- Custom CSS - the primary visual system for layout, responsive behavior, animation, and theme styling.
- [Lucide React](https://lucide.dev/) - lightweight interface icons.
- Radix UI / shadcn-style primitives - available for accessible UI patterns such as dropdown menus and buttons.

## Getting started

### Requirements

- Node.js 18 or newer is recommended.
- npm, or another package manager that understands the existing lockfile.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print a local URL, usually something like `http://localhost:5173`.

### Build for production

```bash
npm run build
```

This runs the TypeScript project build and then creates the optimized static site in `dist/`.

### Preview the production build locally

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

The useful little pre-flight ritual is:

```bash
npm run lint && npm run build
```

If both commands pass, the site is generally in good shape and the computer has not yet filed a formal complaint.

## Project structure

```text
Template-Portfolio-Monograph/
├── index.html                 # Document shell
├── package.json               # Scripts and dependencies
├── vite.config.ts             # Vite, React, Tailwind, and @ alias configuration
├── src/
│   ├── App.tsx                # Page composition and shared state wiring
│   ├── main.tsx               # React entry point
│   ├── index.css              # Global stylesheet entry point
│   ├── config/
│   │   └── fonts.css          # Font variables and fallback stacks
│   ├── data/
│   │   └── content.json       # Main editable portfolio content
│   ├── components/
│   │   ├── layout/             # Header, shell, and contact footer
│   │   ├── sections/           # Hero, about, journey, and work sections
│   │   ├── modals/             # Project and discipline detail dialogs
│   │   ├── theme-provider.tsx  # Light/dark theme state
│   │   ├── mode-toggle.tsx     # Theme switch control
│   │   └── ui/                 # Reusable UI primitives
│   ├── hooks/                  # Scroll, modal, footer, and résumé behavior
│   ├── styles/
│   │   ├── global.css          # Base rules, motion, cursor, and theme styles
│   │   ├── pages/              # Section-specific styles
│   │   └── components/         # Header, footer, and modal styles
│   ├── lib/utils.ts            # Shared class-name utility
│   └── assets/                 # Imported local assets
└── public/                     # Files served directly at the site root
```

## Customizing the portfolio

Most changes should begin in [`src/data/content.json`](src/data/content.json). The components read from that file rather than hardcoding the visible copy, which keeps editing pleasantly boring-in the best possible way.

### Change the identity and contact details

Update the `site` object:

```json
{
  "site": {
    "name": "Your Name",
    "brand": "YN",
    "location": "Remote / Worldwide",
    "timezone": "UTC",
    "email": "hello@yourdomain.com",
    "resume": "/resume.pdf",
    "copyrightName": "Your Name"
  }
}
```

Place the résumé file at `public/resume.pdf`. Because files in `public/` are served from the root, `/resume.pdf` is the correct URL in the JSON file.

### Change the hero

The `hero` object controls the eyebrow text, two lines of the name, role statement, randomly selected introductory phrases, scroll and résumé labels, portrait image, and placeholder text.

To use a local portrait, place the image in `public/` and set:

```json
"portraitImage": "/portrait.jpg"
```

If `portraitImage` is empty, the designed placeholder artwork is shown instead.

### Change the about section

Edit `about.statement`, `about.manifesto`, and the `about.disciplines` array. Each discipline becomes a clickable card and opens a detail modal automatically.

### Change the journey

Edit the `journey.timeline` array to add, remove, or reorder entries. Each entry supports `period`, `title`, `place`, `href`, and `text`. The `education` object controls the final education block beneath the timeline.

### Change projects

Edit the `work.projects` array. Each project supports:

- `title` - project name.
- `type` - category or format.
- `year` - date shown on the card.
- `className` - visual style class, such as `project-neon`, `project-form`, or `project-lumen`.
- `image` - optional image path.
- `imageAlt` - accessible image description.
- `detail` - modal description.
- `role` - contribution summary.
- `stack` - methods, tools, or disciplines used.

Projects without an image use CSS-generated visual artwork. To add a new visual treatment, create a class in [`src/styles/pages/work.css`](src/styles/pages/work.css) and use that class name in the project data.

### Change social links

The `contact.socials` array controls the social cards in the footer. Supported icon names currently include `linkedin`, `instagram`, `facebook`, and `mail`.

If you add a new network, update the `socialIcons` map and handle logic in `src/components/layout/contact-footer.tsx` as well.

## How the main interactions work

### Theme switching

`ThemeProvider` stores the selected theme in `localStorage` under `portfolio-theme`. The current implementation supports light and dark mode through a `.light` or `.dark` class on the document root.

The toggle is intentionally simple: click the sun/moon control to switch themes. The rest of the site responds through CSS selectors such as `.dark .page-content`.

### Scroll reveals

Elements marked with `data-reveal` are observed by `useScrollReveal`. When an element enters the viewport, the hook adds `is-visible`, allowing CSS to animate it into place.

Visitors who prefer reduced motion are respected through `prefers-reduced-motion`. In that mode, reveal elements become visible immediately and decorative motion is disabled.

### Project and discipline modals

Project cards and discipline cards open modal panels rendered through React portals. The system includes click-to-open interactions, backdrop click to close, close buttons, `Escape` key support, body scroll locking, and delayed unmounting so closing animations can finish gracefully.

### Résumé nudge

When the hero scrolls out of view, `useResumeNudge` can reveal a floating résumé action. It disappears again when the contact footer is visible, avoiding a situation where the page aggressively tries to hand you the same PDF from three different directions.

### Cursor effects

On devices with a fine pointer, the shell tracks pointer movement and animates a small cursor dot and glow. On touch devices, these elements are hidden because a finger does not need a tiny personal spotlight.

## Styling and fonts

The global CSS entry point is [`src/index.css`](src/index.css). It imports Tailwind, animation utilities, font variables, and the project-specific stylesheets.

The visual system is mostly expressed in `src/styles/`:

- `global.css` - resets, theme colors, cursor effects, keyframes, and motion preferences.
- `pages/hero.css` - opening composition and portrait area.
- `pages/about.css` - statement, manifesto, and discipline cards.
- `pages/journey.css` - timeline and education block.
- `pages/work.css` - project grid and generated artwork.
- `components/header.css` - navigation and mobile menu.
- `components/modal.css` - detail panels and transitions.
- `components/footer.css` - contact layer and responsive footer layout.

The site uses Instrument Sans and Space Grotesk, with font variables and fallback stacks defined in `src/config/fonts.css`.

## Accessibility notes

The implementation includes semantic sections and headings, alt text support for portrait and project images, labels for icon-only controls, keyboard activation for discipline cards, keyboard dismissal of modals with `Escape`, focusable links and buttons, reduced-motion support, and scroll locking while dialogs are open.

When adding content, keep these habits intact. In particular, always provide useful `imageAlt` text and avoid turning an important action into a click-only decorative element.

## Deployment with GitHub Pages

This project is configured for GitHub Pages using branch-based deployment. There is no GitHub Action: the production files are built locally and published to a `gh-pages` branch.

The repository is named `Template-Portfolio-Monograph`, so Vite uses this production base path:

```text
/Template-Portfolio-Monograph/
```

Local development still uses `/`, so asset paths behave normally when running Vite on your computer.

### One-time GitHub Pages setup

1. Push the project to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `gh-pages` branch and the `/ (root)` folder.
5. Save the setting.

GitHub will publish the branch at:

```text
https://stephenpaul-03.github.io/Template-Portfolio-Monograph/
```

### Publish a new version

Build the site from the current commit:

```bash
npm run lint && npm run build
```

Then publish the generated `dist/` directory to the Pages branch:

```bash
npm run deploy
```

The `deploy` script builds the site and uses [`gh-pages`](https://www.npmjs.com/package/gh-pages) to publish only the generated `dist/` directory to `gh-pages`. The source code remains on `main`, and build artifacts do not need to be committed there.

If `gh-pages` does not exist yet, the first deployment creates it. After GitHub finishes publishing, changes can take a short while to appear because the internet enjoys a small dramatic pause.

### Important branch workflow note

Do not develop directly on `gh-pages`. Keep source code and documentation on `main`, build from `main`, and treat `gh-pages` as generated deployment output. If you ever need to inspect the published files, use:

```bash
git fetch origin gh-pages
git show origin/gh-pages:index.html
```

If deploying the same app under a different repository name, update the `base` value in `vite.config.ts` to match that repository's path.

## Things to check before publishing

- Replace the sample name, email, résumé, and social URLs.
- Add a real portrait or intentionally keep the placeholder.
- Replace the sample project studies with real work.
- Check every link in the contact footer.
- Confirm that the résumé file exists at `public/resume.pdf`.
- Review the page on mobile, keyboard-only navigation, and reduced-motion settings.
- Run `npm run lint && npm run build`.
- Preview the production build with `npm run preview`.

## Credits

The project uses React, Vite, TypeScript, Tailwind CSS, Lucide icons, and a small collection of custom CSS animations. The current footer credits Stephen Paul for the build and links to [his GitHub profile](https://github.com/stephenpaul-03).

## License

No license has been specified yet. If this template will be shared, reused, or open-sourced, add a `LICENSE` file and update this section with the intended terms.

Until then, treat the sample copy and identity as demo content, not as a legally binding invitation to impersonate Alex Morgan. The browser has enough identity crises already.
