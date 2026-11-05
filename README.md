# You Make the Call: Texas Rangers Edition

Concept demo of a game-day companion app for Rangers fans. Fans predict the outcome of the next at-bat, climb a leaderboard, unlock rewards, and get a season recap of the games they attended ("Ballpark Memories").

**Live demo:** https://bvinsonrez.github.io/YouMakeTheCall/

Built by Resultant as a concept prototype. All fan data shown is fictional.

## How it works

- React + Vite, styled with Tailwind (CDN).
- "Scouting Intel" and "Ballpark Memories" call Gemini when an API key is present (as in Google AI Studio). The public build has no key and uses scripted responses instead.
- Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/pages.yml`.

## Run locally

```
npm install
npm run dev
```
