# REDUX{btx}

Multi‑layer bypass tool for ChromeOS extensions (Securly, GoGuardian, Lightspeed, etc.)

## Features
- **.onc network import** – blocks extension update and report domains.
- **Bookmarklet injection** – self‑updating payload for immediate corruption.
- **Storage corruption** – breaks extension local storage and chrome.storage.
- **Skiovox kiosk escape** – step‑by‑step guide for managed devices.

## Deployment
1. Clone this repository.
2. Upload all files to any static hosting (Vercel, Netlify, GitHub Pages).
3. Open `index.html` in a browser on the Chromebook.

## Usage
- Click **Generate .onc File** – then import at `chrome://network#general`.
- Click **Show Bookmarklet** – drag the code to bookmarks, then click on any page.
- Click **Corrupt Extensions** – copy the script and paste in console (or use the bookmarklet).
- Use **Skiovox Guide** for kiosk devices.

## Recovery
If network breaks, use the **Generate Revive .onc** button and import the resulting file.

## Note
No warnings, no disclaimers. This is a tool for educational purposes only.
