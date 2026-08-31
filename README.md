# Magic Date Calculator

A simple HTML, CSS, and JavaScript page that calculates a "magic number" for a date of birth and finds every date within a chosen range that shares the same magic number.

## How it works

1. Enter your date of birth, a "from" date, and a "to" date.
2. The app calculates your magic number:
   - Sum all the digits of your date of birth (year + month + day).
   - Keep summing the digits of the result until a single digit remains. That final value is your magic number.
3. The app scans every day between the "from" and "to" dates (inclusive) and lists the ones whose magic number matches yours.

## Files

- [index.html](index.html) — page structure and form fields.
- [style.css](style.css) — styling, responsive layout for desktop and mobile.
- [script.js](script.js) — magic number calculation and date range matching logic.

## Usage

Open [index.html](index.html) directly in a browser — no build step or server required.
