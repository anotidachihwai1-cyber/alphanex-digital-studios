# AlphaNex Digital Studios

Complete, responsive static website. No build step or paid libraries required.

## Preview

Open `index.html` directly, or run `npx serve .` from this folder and open the local URL it prints. The WhatsApp quote flow works without a backend. Google Fonts are optional; system fonts work offline.

## Set your real contact details

Edit `config.js`. Calls are configured for 0785237373 (+263785237373), and WhatsApp for 0778827157 (+263778827157), using the supplied Zimbabwe country code. Email remains blank. Set `email` to your actual contact email if desired. Leave contact values blank to hide their links. No invented contact details are included.

The form validates the request and redirects to the configured WhatsApp number with a prefilled message. Visitors tap Send in WhatsApp themselves. Email is optional. No download or attachment is required. A Continue to WhatsApp link remains available if redirection fails. Opening WhatsApp is never reported as delivered. Form details are included in the WhatsApp URL when visitors continue; this site has no submission server or database.

## Deploy

Upload index.html, styles.css, app.js and config.js to any static hosting provider, such as a static site service or your web host’s public folder. `index.html` must be at the root of the published directory. No environment variables or build command are required. Enable HTTPS through your host. Test the site URL on a phone, test a WhatsApp quote request, and test email and WhatsApp links after configuring them.

A private Sites preview may also be provided in the accompanying chat. Private hosting is visible only to its authorized owner until access is explicitly changed.

## Content and launch notes

- All amounts are USD. Confirm proposed package scope and any additional costs in a written quote.
- Forma Living and Stride Studio are original illustrative concepts, not client work. Their cards open concept details.
- Reviews and review navigation have been removed as requested. No rating, testimonial or review storage is included.
- No visitor information is stored by this website. Quote details stay in the page until passed to WhatsApp when the visitor submits. Hosting providers may independently keep access logs.
- Font requests go to Google Fonts. To avoid those requests, remove the first `@import` line in `styles.css` and use the included fallback fonts, or self-host licensed font files.
- If you later add server form submission, implement validation, spam controls and a privacy notice appropriate to that service. Public reviews would require durable storage and moderation before publication.

## Files

- `index.html`: all page content, accessible forms and concept dialog
- `styles.css`: layout, responsive breakpoints and reduced-motion support
- `app.js`: navigation, package selection, concept dialogs and WhatsApp quote redirection
- `config.js`: editable contact details

The `.openai/hosting.json` file, when present, belongs to the private Sites deployment. It is not needed by other static hosts.
