# Lattice Agent Identity

A static mock landing page for an Identity Workspace, styled with a workstation-inspired Carbon Design System aesthetic.

## Run locally

Open `index.html` in a browser, or use Firebase's local emulator:

```bash
npm install -g firebase-tools
firebase emulators:start --only hosting
```

## Deploy to Firebase Hosting

```bash
firebase login
firebase init hosting
# Choose this repository, keep the public directory as `.` and do not enable SPA rewrites.
firebase deploy --only hosting
```

The deployable static files are `index.html`, `styles.css`, and `app.js`. The supplied `firebase.json` prevents the two source submodules from being published.
