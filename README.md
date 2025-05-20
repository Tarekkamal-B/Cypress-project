# Cypress Automation Project

This repository contains automated end-to-end (E2E) tests written in Cypress to validate UI components and user flows across various websites. The tests demonstrate Cypress best practices such as using Page Object Model, custom commands, and integration with CI/CD pipelines.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Running Tests](#running-tests)  
- [Test Suites](#test-suites)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

This project aims to provide a solid foundation for automated UI testing using Cypress. It covers various common web elements like dropdowns, radio buttons, checkboxes, and user authentication flows on real websites. The goal is to create maintainable, scalable test automation scripts following best practices.

---

## Features

- Automated E2E testing using Cypress  
- Tests cover dropdowns, radio buttons, checkboxes, and login flows  
- Custom Cypress commands for reusable actions  
- Cross-browser testing support (Chrome, Firefox, Edge)  
- Integration with GitHub Actions for CI/CD pipelines  

---

## Prerequisites

- Node.js v14 or higher  
- npm (Node package manager)  
- Internet connection to access test URLs  

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tarekkamal-B/Cypress-project.git
   cd Cypress-project
````

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Running Tests

To open the Cypress Test Runner:

```bash
npx cypress open
```

Select any test file to run the corresponding test suite.

Alternatively, run all tests headlessly:

```bash
npx cypress run
```

---

## Test Suites

### 1. Dropdown.cy.js — Handling Dropdowns

* **Dropdown With Select:**
  Selects "Apple" from a standard dropdown on [letcode.in](https://letcode.in/dropdowns) and verifies the selection.

* **Dropdown Without Select:**
  Selects "Egypt" from a custom dropdown on [dummyticket.com](https://www.dummyticket.com/dummy-ticket-for-visa-application/).

* **Auto Suggestion Dropdown:**
  Searches "Egypt" on [wikipedia.org](https://www.wikipedia.org/) and selects an autocomplete suggestion.

* **Dynamic Dropdown:**
  Searches "cypress automation" on [google.com](https://www.google.com/), selects a dynamic suggestion, and verifies the input.

---

### 2. LoginModule.cy.js — Login Functionality

Tests login flows on the OrangeHRM demo site:

* Verifies page title is "OrangeHRM".
* Logs in with valid credentials and checks dashboard access.
* Tests invalid password and username scenarios.
* Verifies logout functionality.

Uses a custom command `cy.login(username, password)` for login.

---

### 3. RadioButtonAndCheckBox.cy.js — Radio Buttons and Checkboxes

Tests interactions on [testautomationpractice.blogspot.com](https://testautomationpractice.blogspot.com/):

* Checks/unchecks male and female radio buttons.
* Checks/unchecks single and multiple checkboxes, verifying states.

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

