# Repository Guidelines

## Project Structure & Module Organization
The root `README.md` serves as the tutorial front page with the learning path and update log. Narrative content lives in chapter markdown files named `chapterXX_*.md`, one per lesson. Interactive assets are in `examples/`, grouped by chapter (`examples/chapter0X/<sample>/`). Each sample contains an `index.html`, a `sketch.js` with the annotated p5.js logic, and optional assets such as images or CSS. Keep new materials aligned with this layout so learners can quickly map prose to runnable code.

## Build, Test, and Development Commands
This repository is static; no build step is required. During authoring, launch a lightweight server from the project root to avoid browser security restrictions: `python3 -m http.server 8000` then open `http://localhost:8000/examples/<chapter>/<sample>/`. Edit `sketch.js` or the associated markdown directly and refresh the browser to validate changes.

## Coding Style & Naming Conventions
p5.js sketches follow two-space indentation with readable vertical spacing between logical blocks. Prefer `camelCase` for variables and functions, mirroring the p5.js API. Keep filenames descriptive and lowercase with underscores (e.g., `basic_shapes`). Inline comments should clarify intent or parameters, matching the instructional tone already present in existing samples.

## Testing Guidelines
There is no automated test harness. Verify changes by opening the affected sample in a modern browser and confirming that interactions, animations, and explanatory comments still align with the chapter text. When adding new samples, ensure they render at 400×400 by default unless the lesson requires otherwise, and document any deviations in both the markdown chapter and the sample folder's `README` if created.

## Commit & Pull Request Guidelines
Commit messages mirror the current history: start with an imperative verb, capitalize the first word, and keep them concise (e.g., "Add runnable examples for each tutorial sample"). For pull requests, provide a short summary of the learner-facing impact, list touched chapters or samples, and include screenshots or GIFs when visual changes are substantial. Flag any manual verification steps so reviewers can reproduce them quickly.
