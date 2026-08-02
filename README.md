# Frontend Quiz App

A timed multiple-choice quiz on front-end fundamentals, built with Vue 3 and Pinia. Four subjects, ten questions each, ten seconds per question, with a light/dark theme that remembers your choice.

Based on the [Frontend Mentor "Frontend quiz app" challenge](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU), extended with a per-question countdown.

## Features

- **Four quizzes** — HTML, CSS, JavaScript and Accessibility, 10 questions apiece, loaded from `data.json`
- **Ten-second timer per question** with a draining progress bar; letting it run out submits a blank answer and moves on
- **Immediate feedback** — the chosen option is marked correct or incorrect, and the right answer is revealed when you miss
- **Score screen** at the end, with a play-again reset
- **Theme switcher** — follows `prefers-color-scheme` on first visit, then persists your preference to `localStorage`

## Tech stack

| | |
|---|---|
| Framework | Vue 3 (`<script setup>` SFCs) |
| State | Pinia |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Data | local `data.json` |

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Vite prints the local URL when it starts.

Other scripts: `npm run build`, `npm run preview`.

## Project structure

```
data.json                  the four quizzes and their questions
src/
  components/
    layout/                header, landing, main, quiz shell
    quiz/
      TheMultipleSelection.vue   answer options and their states
      TheTimeBar.vue             countdown bar
      TheScore.vue               end-of-quiz result
    theme/                 switcher and sun/moon icons
    UI/                    container, button, content layout, background
  store/store.js           useThemeStore and useQuizStore
```

## Implementation notes

The quiz is driven by a single `questionStatus` computed that folds selection, submission and the timer into one of six states — `SELECTION_IDLE`, `SELECTION_ACTIVE`, `PICKED_CORRECTLY`, `PICKED_INCORRECTLY`, `TIME_EXPIRED`, `NOTHING_SELECTED`. Everything else reacts to it: a watcher starts or pauses the countdown, increments the score on a correct pick, and the option components style themselves from the same value. Adding a new behaviour usually means adding a branch there rather than threading a flag through the components.

The countdown ticks every 100 ms and decrements by `0.1` so the progress bar animates smoothly rather than stepping once a second. A watcher on `timer` auto-submits when it reaches zero.

Theme state initialises from `localStorage` and falls back to the OS setting, so a first-time visitor gets the theme they already prefer.

## Credits

Design and question set from [Frontend Mentor](https://www.frontendmentor.io). Implementation by [@cancomertpay](https://github.com/cancomertpay).
