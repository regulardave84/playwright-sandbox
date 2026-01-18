# playwright-sandbox
A sandbox to play around with Playwright.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install chromium
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in headed mode:
```bash
npm run test:headed
```

Run tests in UI mode:
```bash
npm run test:ui
```

## Test Structure

- `tests/` - Contains all test files
- `playwright.config.js` - Playwright configuration
- Test reports are generated in `playwright-report/`
