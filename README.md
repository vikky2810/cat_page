# Cat Corner

Cat Corner is a static website built with plain HTML, CSS, and JavaScript. It shows a clean cat-themed layout and fetches a real-time cat fact from the [catfact.ninja API](https://catfact.ninja/fact) when you press the button.

## Features

- Responsive single-page cat-themed layout
- Styled card UI with subtle gradients and spacing
- "Cat Fact of the Moment" section powered by catfact.ninja
- Graceful local fallback fact if the API cannot be reached
- Status indicator for loading, success, and fallback states

## Project structure

- `index.html` — Semantic page structure and UI sections
- `styles.css` — Theme, layout, button, and status styling
- `script.js` — Fetch logic, API handling, and fallback behavior

## Run locally

Because this is a static site, you can open it directly in a browser:

1. Clone or download this repository.
2. Open `index.html`.

Or serve it with a local static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

- The site requests one fact per button click.
- If the API request fails, a random local fact is shown so the page remains functional offline.
