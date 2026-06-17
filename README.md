# Document Management System

## Overview

This project is a React-based Document Management System developed as part of a Front-End Developer assignment. The application allows users to authenticate using OTP, upload documents with metadata, search documents using filters, and manage users through a simple admin interface.

The project focuses on frontend development, API integration, responsive design, and proper Git version control practices.

---

## Features

### Authentication

* OTP-based login interface
* Generate OTP API integration
* Validate OTP API integration

### Document Upload

* Document date selection
* Category selection (Personal / Professional)
* Dynamic subcategory selection
* Tags input
* Remarks input
* File upload support
* Upload API integration

### Document Search

* Search by category
* Search by tags
* Search by date range
* Search API integration
* Results displayed in table format

### Document Actions

* Preview action
* Download action

### Admin Module

* User creation form
* Username and password fields

### User Interface

* Responsive Bootstrap-based design
* Navigation bar
* Form validation and state handling using React Hooks

---

## Technologies Used

* React
* Vite
* React Router DOM
* Axios
* Bootstrap
* JavaScript (ES6+)

---

## Project Structure

```text
src/
├── components/
├── pages/
│   ├── Login.jsx
│   ├── Upload.jsx
│   ├── Search.jsx
│   └── Admin.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd document-management-system
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Open the URL shown in the terminal (typically http://localhost:5173).

---

## Testing

No automated tests have been configured for this assignment project.

Testing was performed manually by:

* Verifying page navigation
* Testing API requests
* Testing form inputs and state updates
* Testing upload and search workflows

---

## API Integration

The application integrates with the provided backend APIs:

* Generate OTP
* Validate OTP
* Upload Document
* Search Document

Authenticated APIs require a valid token returned by the OTP validation endpoint.

---

## Git Workflow

The project was developed using incremental Git commits throughout the development process.

Each feature, enhancement, and bug fix was committed separately using meaningful commit messages as required by the assignment guidelines.

---

## Notes

* Bootstrap was used for styling and responsive layout.
* OTP authentication depends on backend-registered mobile numbers.
* Upload and Search APIs require a valid authentication token.
* The project was developed following the requirements provided in the assignment document.

---

## Author

Prateek Soni

