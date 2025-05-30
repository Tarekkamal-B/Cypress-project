# Cypress Automation Project 🚀

[![Run Cypress Tests](https://github.com/Tarekkamal-B/Cypress-project/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/Tarekkamal-B/Cypress-project/actions/workflows/cypress-tests.yml)

![Cypress Logo](https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo.png)

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
- File uploads including Shadow DOM elements 📤  
- **Data-driven testing using fixture files** 📁  
- **Reusable test data loaded with hooks** ♻️  

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
* **Dropdown With Select**: Selects "Apple" from [letcode.in](https://letcode.in/dropdowns)  
* **Dropdown Without Select**: Selects "Egypt" from [dummyticket.com](https://www.dummyticket.com/)  
* **Auto-Suggestion Dropdown**: Searches "Egypt" on [Wikipedia](https://www.wikipedia.org/)  
* **Dynamic Dropdown**: Tests Google search suggestions for "cypress automation"  

### 2. `LoginModule.cy.js` - Login Flows  
Tests **OrangeHRM** demo site:  
* ✅ Valid login → Dashboard access  
* ❌ Invalid credentials → Error handling  
* 🔐 Logout functionality  
* *Uses custom command:* `cy.login(username, password)`  

### 3. `RadioButtonAndCheckBox.cy.js` - Input Testing  
Tests on [testautomationpractice.blogspot.com](https://testautomationpractice.blogspot.com/):  
* 🔘 Radio buttons (Male/Female)  
* ☑️ Checkboxes (Single/Multiple)  

### 4. `Alerts.cy.js` - JavaScript Alerts & Authentication  
Tests on [the-internet.herokuapp.com](https://the-internet.herokuapp.com):  
* 🔔 JS Alert — Validate standard alert text  
* ✅ Confirm Alert — Validate OK/Cancel  
* ✍️ Prompt Alert — Stub input and validate  
* ❌ Prompt Cancel — Stub with `null`  
* 🔐 Basic Auth — Test protected pages with `{auth: {username, password}}`  

### 5. `Tabs.cy.js` - Handling Browser Tabs  
Tests on [the-internet.herokuapp.com/windows](https://the-internet.herokuapp.com/windows):  
* 🔗 Remove `target` to open in same tab  
* 🔗 Extract URL, visit directly, and return  
* ✅ Validate both tabs with `cy.visit()` and `cy.go('back')`  

### 6. `iframes.cy.js` - Handling Iframes  
Tests on [practice.expandtesting.com/iframe](https://practice.expandtesting.com/iframe):  
* 🧩 Manual access via `contentDocument.body`  
* 🧩 Custom command `cy.GetIframe(selector)`  
* 🧩 `cypress-iframe` plugin usage with `cy.iframe()`  

### 7. `Table.cy.js` - Handling Tables  
Tests on [OpenCart Reports Admin Panel](https://demo3x.opencartreports.com/admin/):  
* 🔐 Login with credentials  
* 🔢 Validate row & column count  
* 📊 Check specific cell values  
* 📄 Read data from first page  
* 📈 Get total page count  

### 8. `PaginationTable.cy.js` - Handling Pagination  
Tests on [DataTables Example](https://datatables.net/examples/basic_init/alt_pagination.html):  
* 🔢 Count total employees  
* 🔄 Loop pages 3–7  
* 📊 Log values from "Office" column  

### 9. `MouseOperations.cy.js` - Mouse Operations  
Tests on various sites:  
* 🖱️ Hover using `cypress-real-events`  
* 🖱️ Right-click menu detection  
* 🖱️ Double-click validation  
* 🖱️ Drag-and-drop plugin usage  
* 🖱️ Scroll to elements & footer  

### 10. `FileUpload.cy.js` – File Uploads  
Tests various upload scenarios, including advanced ones:  
* 📁 **Single File Upload**: Uploads `Jmeter CSV.csv` at [the-internet.herokuapp.com/upload](https://the-internet.herokuapp.com/upload)  
* ✏️ **Rename Before Upload**: Renames to `MyJemter.csv` and verifies  
* 🖱️ **Drag and Drop Upload**: Uses `subjectType: 'drag-n-drop'`  
* 📎 **Multiple File Upload**: Uploads `Jmeter CSV.csv` and `Oreders CSV.csv` at [davidwalsh.name](https://davidwalsh.name/demo/multiple-file-upload.php)  
* 🌐 **Shadow DOM File Upload**: Upload inside a shadow-root at [htmlelements.com](https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm) using `{ includeShadowDom: true }`  

### 11. `DataDrivenTest.cy.js` – Data-Driven Testing with Fixtures  
Tests login functionality on [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/):  
* 📁 Loads multiple user credentials from `OrangeHrm2.json`  
* ✅ Valid credentials → Dashboard access and logout  
* ❌ Invalid credentials → Proper error message validation  
* 🔁 Loops through data using `.forEach()`  
* 🧰 Handles known exception (`Cannot read properties of undefined`) to prevent test failures  

### 12. `Fixture.cy.js` – Using Fixtures in Cypress  
Also tests login on [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/):  
* 📁 Uses fixture file `OrangeHrm.json`  
* 🔸 **Approach 1**: Direct access within test block using `.then()`  
* 🔹 **Approach 2**: Loads fixture in `before()` hook for reuse across multiple test blocks  
* ✅ Verifies dashboard header text on successful login  

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

