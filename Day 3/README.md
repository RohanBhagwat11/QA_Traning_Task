# QA Trainee Task

## Overview

This project contains automated test cases developed using **Playwright** with **TypeScript**. The framework follows the **Page Object Model (POM)** design pattern to improve maintainability, readability, and reusability of test scripts.

---

## Technology Stack

* **Language:** TypeScript
* **Automation Tool:** Playwright
* **Design Pattern:** Page Object Model (POM)
* **Test Runner:** Playwright Test Runner

---

## Automated Test Cases

### Login Module

1. Login page should load successfully.
2. Valid user should be able to log in.
3. Invalid password should display an error message.
4. Locked user should not be able to log in.

### Product Module

5. Product list should be visible after login.
6. Add one product to cart.
7. Remove product from cart.
8. Add multiple products to cart.

### Cart Module

9. Cart page should display selected products.

### Checkout Module

10. Checkout with valid details should reach the overview page.
11. Checkout with missing first name should show a validation error.
12. Checkout with missing last name should show a validation error.
13. Checkout with missing postal code should show a validation error.

### Logout Module

14. User should be able to log out successfully.

### Social Media Navigation

15. User should be able to navigate to the company Twitter page.
16. User should be able to navigate to the company Facebook page.
17. User should be able to navigate to the company LinkedIn page.

---

## Project Structure

```text
Final Deliverables/
│
├── tests/
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   ├── logout.spec.ts
│   ├── SocialMedia.spec.ts
│   └── checkout.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── LogoutPage.ts
│   ├── SocialMediaPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│   ├── users.ts
│   ├── userdata.ts
│   └── products.ts
│
├── Constants/
│    ├── errorMsg.ts
│    └── routes.ts
│
├── utils/
│   └── testHelpers.ts
│
├── playwright.config.ts
├── package.json
├── Playwright Test Report/
├── Manual Test Scenario.xlsx
├── Debugging Note.pdf
├── Self Review Note.txt
└── README.md
```

---

## Prerequisites

Before running the project, ensure the following are installed:

* Node.js (v18 or later recommended)
* npm (comes with Node.js)

Verify installation:

```bash
node -v
npm -v
```

---

## Project Setup

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## Test Execution Commands

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Run Tests in UI Mode

```bash
npx playwright test --ui
```

### Show HTML Report

```bash
npx playwright show-report
```

### Run Smoke Tests

```bash
npx playwright test --grep @smoke
```

### Run Negative Test Cases

```bash
npx playwright test --grep @negative
```

### Run a Specific Test File

```bash
npx playwright test tests/login.spec.ts
```

---

## Reporting

Generate and view the HTML report:

```bash
npx playwright show-report
```

---

## Deliverables

The following artifacts are included as part of the submission:

* Automated Test Scripts
* Playwright HTML Test Report
* Manual Test Scenarios (Excel)
* Debugging Notes
* Self-Review Notes
* Project Documentation (README)

---


