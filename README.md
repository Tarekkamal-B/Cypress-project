# Cypress Automation Project �

![Cypress Logo](https://www.cypress.io/static/cypress-io-logo-social-share-8fb8a1db3cdc0b289fad927694ecb415.png)

This repository contains **automated end-to-end (E2E) tests** written in Cypress to validate UI components and user flows across various websites. The tests demonstrate Cypress best practices, including the **Page Object Model**, **custom commands**, and **CI/CD integration**.

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running Tests](#-running-tests)
- [Test Suites](#-test-suites)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Project Overview
This project provides a **solid foundation for automated UI testing** using Cypress. It covers common web elements like:
- Dropdowns 📌
- Radio buttons 🔘  
- Checkboxes ☑️  
- Login flows 🔐  

Tests run on **real websites** and follow **maintainable, scalable** automation best practices.

---

## ✨ Features
- ✅ **End-to-End Testing** with Cypress  
- ✅ **Cross-Browser Support** (Chrome, Firefox, Edge)  
- ✅ **Page Object Model (POM)** for clean code  
- ✅ **Custom Commands** for reusable actions  
- ✅ **CI/CD Integration** (GitHub Actions)  

---

## ⚙️ Prerequisites
- [Node.js](https://nodejs.org/) (v14+)  
- [npm](https://www.npmjs.com/)  
- Internet connection (to access test URLs)  

---

## 📥 Installation
1. **Clone the repo**:
   ```bash
   git clone https://github.com/Tarekkamal-B/Cypress-project.git
   cd Cypress-project
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 🧪 Running Tests
### Open Cypress Test Runner (GUI)
```bash
npx cypress open
```
*Select any test file to run interactively.*

### Run All Tests Headlessly
```bash
npx cypress run
```

---

## 📂 Test Suites

### 1. `Dropdown.cy.js` - Handling Dropdowns
- **Dropdown With Select**: Selects "Apple" from [letcode.in](https://letcode.in/dropdowns).  
- **Dropdown Without Select**: Selects "Egypt" from [dummyticket.com](https://www.dummyticket.com/).  
- **Auto-Suggestion Dropdown**: Searches "Egypt" on [Wikipedia](https://www.wikipedia.org/).  
- **Dynamic Dropdown**: Tests Google search suggestions for "cypress automation".  

### 2. `LoginModule.cy.js` - Login Flows
Tests **OrangeHRM** demo site:
- ✅ Valid login → Dashboard access  
- ❌ Invalid credentials → Error handling  
- 🔐 Logout functionality  

*Uses custom command:* `cy.login(username, password)`.

### 3. `RadioButtonAndCheckBox.cy.js` - Input Testing
Tests on [testautomationpractice.blogspot.com](https://testautomationpractice.blogspot.com/):
- 🔘 Radio buttons (Male/Female)  
- ☑️ Checkboxes (Single/Multiple)  

### 4. `Alerts.cy.js` - JavaScript Alerts & Authentication
Tests on [the-internet.herokuapp.com](https://the-internet.herokuapp.com):
- 🔔 JS Alert — Validate standard alert text  
- ✅ Confirm Alert (OK and Cancel) — Validate user confirmation behavior  
- ✍️ Prompt Alert — Stub prompt input and validate text entry  
- ❌ Prompt Cancel — Stub prompt with `null` and validate cancel behavior  
- 🔐 Basic Auth — Access protected pages using `{auth: {username, password}}` options

### 5. `Tabs.cy.js` - Handling Browser Tabs
Tests on [the-internet.herokuapp.com](https://the-internet.herokuapp.com/windows):
- 🔗 **Approach 1** — Remove `target` attribute and open the new tab in the same window  
- 🔗 **Approach 2** — Extract the URL from the link, visit it directly, then return to the parent tab  
- ✅ Validates both child and parent content using `cy.visit()` and `cy.go('back')`

---

## 🤝 Contributing
Contributions are welcome!  
1. **Fork** the repo  
2. Create a **feature branch** (`git checkout -b feature/your-feature`)  
3. **Commit** changes (`git commit -m "Add amazing test"`)  
4. **Push** to the branch (`git push origin feature/your-feature`)  
5. Open a **Pull Request**  

---


```
