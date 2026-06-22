# Practic - Playwright Testing Project

A comprehensive Playwright testing project for end-to-end testing automation.

## Installation

Install dependencies:

```bash
npm install
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in headed mode (with browser visible):

```bash
npm run test:headed
```

Run tests in debug mode:

```bash
npm run test:debug
```

Run tests with UI:

```bash
npm run test:ui
```

## Project Structure

```
practic/
├── .github/
│   └── copilot-instructions.md
├── tests/
│   └── example.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

## Configuration

Edit `playwright.config.js` to:
- Change the base URL for your application
- Configure different browsers (Chromium, Firefox, WebKit)
- Adjust timeout and retry settings
- Set up web server configuration

## Writing Tests

Tests are located in the `tests/` directory. Each test file should have a `.spec.js` extension.

Example test structure:

```javascript
import { test, expect } from '@playwright/test';

test('description of test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Add assertions and interactions
});
```

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Test Documentation](https://playwright.dev/docs/intro)
- [Locators and Selectors](https://playwright.dev/docs/locators)
