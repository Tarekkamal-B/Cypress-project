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
This project provides a **solid foundation for automated UI testing** using Cypress. It covers a wide range of common web elements and user interactions, including but not limited to:

- Dropdowns 📌  
- Radio buttons 🔘  
- Checkboxes ☑️  
- Login flows 🔐  
- JavaScript alerts and authentication dialogs 🔔  
- Handling browser tabs 🔗  
- Working with iframes 🧩  
- Managing tables and pagination 🔢  
- Mouse operations like hover, right-click, double click, drag and drop, and scrolling 🖱️  

Tests run on **real websites** and follow **maintainable, scalable** automation best practices, leveraging Page Object Model (POM), custom commands, and CI/CD integration.

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
Tests on [the-internet.herokuapp.com/windows](https://the-internet.herokuapp.com/windows):
- 🔗 **Approach 1** — Remove `target` attribute and open the new tab in the same window  
- 🔗 **Approach 2** — Extract the URL from the link, visit it directly, then return to the parent tab  
- ✅ Validates both child and parent content using `cy.visit()` and `cy.go('back')`

### 6. `iframes.cy.js` - Handling Iframes  
Tests on [practice.expandtesting.com/iframe](https://practice.expandtesting.com/iframe):
- 🧩 **Approach 1** — Manually access iframe via `contentDocument.body` and wrap it  
- 🧩 **Approach 2** — Use custom command `cy.GetIframe(selector)` to simplify iframe handling  
- 🧩 **Approach 3** — Use `cypress-iframe` plugin for clean, reusable iframe interactions with `cy.frameLoaded()` and `cy.iframe()`

### 7. `Table.cy.js` - Handling Tables
Tests on [OpenCart Reports Admin Panel](https://demo3x.opencartreports.com/admin/):
- 🔐 Logs in with username and password  
- 🔢 Checks number of table **rows** and **columns**  
- 📊 Validates specific **cell data** (e.g., "$2,107.67")  
- 📄 Reads all table data from the **first page**  
- 📈 Extracts and logs the **total number of pages**

### 8. `PaginationTable.cy.js` - Handling Pagination
Tests on [DataTables Example](https://datatables.net/examples/basic_init/alt_pagination.html):
- 🔢 Logs total number of employees  
- 🔄 Iterates through paginated table (pages 3 to 7)  
- 📊 Logs values from the **Office** column on each page

### 9. `MouseOperations.cy.js` - Mouse Operations  
Tests various mouse-related user interactions on multiple websites, including:  
- 🖱️ Mouse Hover using `cypress-real-events` plugin on [the-internet.herokuapp.com/hovers](https://the-internet.herokuapp.com/hovers)  
- 🖱️ Right Click (context menu) detection and handling on [the-internet.herokuapp.com/context_menu](https://the-internet.herokuapp.com/context_menu) and [jQuery context menu demo](https://swisnl.github.io/jQuery-contextMenu/demo.html)  
- 🖱️ Double Click event testing on [testautomationpractice.blogspot.com](https://testautomationpractice.blogspot.com/)  
- 🖱️ Drag and Drop using plugin on [dhtmlgoodies.com drag drop demo](http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html)  
- 🖱️ Scrolling page to elements and footer validation on [countries-ofthe-world.com](https://www.countries-ofthe-world.com/flags-of-the-world.html)  


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
