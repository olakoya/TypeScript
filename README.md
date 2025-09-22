```markdown
# Playwright Tests (TypeScript)

This folder contains **end-to-end (E2E) test automation** for the flight booking application, written in **TypeScript** using [Playwright](https://playwright.dev).

## 📂 Folder Structure
```

/typescript
├── tests/           # Test specs (feature-based)
├── fixtures/        # Test data & reusable test setup
├── helpers/         # Utility functions
├── playwright.config.ts  # Playwright configuration
└── package.json     # Dependencies

````

## 🛠 Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)
- Git (to clone and version control)
- **Nano editor** (optional, for editing files in terminal)

### Install Nano
On macOS (with Homebrew):
```bash
brew install nano
````

On Ubuntu/Debian Linux:

```bash
sudo apt update && sudo apt install nano -y
```

On Fedora:

```bash
sudo dnf install nano -y
```

✏️ Nano Usage Cheat Sheet

If you are new to editing code in the terminal, here are some common Nano commands:

Open a file in Nano:

nano filename.ts


Save changes: CTRL + O (then press Enter)

Exit Nano: CTRL + X

Cut a line: CTRL + K

Paste a line: CTRL + U

Search within file: CTRL + W

Go to line number: CTRL + _ (then enter line number)

👉 Tip: You’ll see the list of shortcuts at the bottom of the Nano editor.

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests

* Run all tests:

```bash
npx playwright test
```

* Run a specific test file:

```bash
npx playwright test tests/booking.spec.ts
```

* Run with UI mode:

```bash
npx playwright test --ui
```

### 3. Generate Test Report

```bash
npx playwright show-report
```

## ✅ Best Practices

* Follow **Page Object Model (POM)** for maintainability.
* Use **TypeScript types** to avoid runtime errors.
* Store **test data** in fixtures, not inside tests.
* Keep tests **idempotent** (independent and repeatable).

---

📌 **Note:** These tests are intended for **QA automation** of any application across **web and mobile browsers**.

```
---
```

### Authored by Yours Truly : Ola Koya

```
