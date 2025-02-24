# ClicketyCart - JS Frameworks CA

## About the Project

At **ClicketyCart**, we believe shopping should be as quick and seamless as a single click. No delays, no hassle—just instant access to the products you love. With a sleek, turbo-charged checkout process and lightning-fast delivery, we take online shopping to the next level. Whether you're browsing on the go or making last-minute buys, ClicketyCart gets it done faster than you can say "add to cart." 🛒💨

This project is the **frontend implementation** of a fictional e-commerce store, built on an existing backend API provided by Noroff. The aim is to bring the user interface to life with a fun, retro design and modern React functionality.

---

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation and Setup](#installation-and-setup)
3. [Development Tools and Configuration](#development-tools-and-configuration)
   - [Tools Used](#tools-used)
   - [Linting and Formatting](#linting-and-formatting)
4. [Commit Message Guidelines](#commit-message-guidelines)
   - [Format](#format)
   - [Types](#types)
5. [License](#license)
6. [Future Updates](#future-updates)

---

## Features

- The Homepage has a list of all the products. There is a look-ahead search bar that filters products when typing in a product name. Clicking on a product takes a user to an individual product page.
- The pages use a <Layout> component that contains a header and footer. The header contains a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.
- The individual product page displays data for a single product. There is an Add to cart button which, upon clicking, adds the product to the cart.
- Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page has a Checkout button. Clicking this Checkout button then goes to a Checkout success page.
- The Checkout success page displays a message to the user notifying them that their order was successful.
- There is a contact page which contains a contact form.
- React Router is used to switch between pages.

---

## Getting Started

### Prerequisites

To run the project locally, you’ll need:

- **Node.js** (v16 or later)
- **npm** (Node Package Manager, comes with Node.js)
- A code editor like **Visual Studio Code**

### Installation and Setup

1. **Clone the Repository**

```bash
   git clone https://github.com/maddipaddi/frameworks-CA.git
```

2. **Install Dependencies**

```bash
   npm install
```

3. **Run the Development Server**

```bash
   npm run dev
```

Open the development server in your browser at the provided local host port link.

4. **Build for Production**
   To create an optimized production build:

```bash
   npm run build
```

5. **Preview the Build**
   To preview the production build locally:

```bash
   npm run preview
```

---

## Development Tools and Configuration

### Tools Used

- Vite: For fast and modern frontend tooling.
- ESLint: To enforce consistent code quality.
- Prettier: For automatic code formatting.
- Husky: To enforce pre-commit hooks, ensuring quality at every step.
- Lint-Staged: Runs linters and formatters on staged files.

---

## Commit Message Guidelines

We follow the Conventional Commits (https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard to maintain a clear and consistent commit history. This ensures commits are easy to understand and align with best practices for version control.

### Format

Commit messages should follow this format:
<type>: <short description>
Use present tense and the imperative mood (e.g., "add," not "added" or "adds").
Keep the description concise but meaningful.

### Types

- **`feat:`** Adding a new feature.  
  _Example_: `feat: implement user registration form`

- **`fix:`** Fixing a bug.  
  _Example_: `fix: resolve broken API integration`

- **`build:`** Changes related to the build system or dependencies.  
  _Example_: `build: configure ESLint and Prettier`

- **`chore:`** Maintenance tasks that don't affect functionality.  
  _Example_: `chore: update README.md`

- **`style:`**: Changes that affect the appearance or styling of the application, but not its functionality.  
  _Example_: `style: update header and footer layout`

- **`docs:`** Updates to documentation.  
  _Example_: `docs: add setup instructions to README`

- **`refactor:`** Code restructuring without changing functionality.  
  _Example_: `refactor: simplify user authentication logic`

- **`test:`** Adding or updating tests.  
  _Example_: `test: add unit tests for login functionality`

---

## License

This project is for educational purposes only as part of the Noroff Frontend Development curriculum. It is not intended for commercial use.

---
