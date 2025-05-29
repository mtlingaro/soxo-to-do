# soxo-to-do

**A modern, responsive to-do list application built with Next.js, React, and TypeScript.**

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Architecture & Folder Structure](#architecture--folder-structure)
5. [Getting Started](#getting-started)

    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the Application](#running-the-application)
6. [Available Scripts](#available-scripts)
7. [Testing](#testing)
8. [Linting & Formatting](#linting--formatting)
9. [Contact](#contact)

---

## Project Overview

**soxo-to-do** is a single-page application designed to help users manage their tasks efficiently. It implements operations for to-dos, built on Next.js to provide server-side rendering and optimized performance. With TypeScript at its core, the codebase ensures type safety and maintainability.

## Features

* **Mark as Completed:** Toggle task status to track progress.
* **Filtering:** View all, active, or completed tasks.
* **Responsive Design:** Works seamlessly across desktop, tablet, and mobile.

## Tech Stack

* **Framework:** [Next.js](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** CSS Modules / Styled Components (adjust based on your implementation)
* **State Management:** React Context / local state (specify library if used)
* **Testing:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
* **Linting & Formatting:** ESLint, Prettier

## Architecture & Folder Structure

```
├── public/             # Static assets (images, fonts, icons)
├── src/                # Source files
│   ├── __mocks__/next/ # Mock implementations for Next.js modules
│   ├── app/            # Next.js app routes
│   ├── components/     # Reusable UI components
│   ├── models/         # Models and types for data structures
│   ├── styles/         # Global and module-specific styles
│   └── tests/          # Jest tests for components
├── .eslintrc.js        # ESLint configuration
├── jest.config.ts      # Jest configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project metadata & scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

* **Node.js** (>= 14.x)
* **Yarn**, **npm**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/mtlingaro/soxo-to-do.git
cd soxo-to-do

# Install dependencies
yarn install
```

### Running the Application

```bash
# Development mode
yarn dev

# Production build
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Available Scripts

| Script   | Description                                         |
| -------- | --------------------------------------------------- |
| `dev`    | Starts the Next.js development server               |
| `build`  | Creates an optimized production build               |
| `start`  | Runs the production build on Node.js server         |
| `lint`   | Runs ESLint to analyze code quality                 |
| `format` | Formats code using Prettier                         |
| `test`   | Runs unit tests with Jest and React Testing Library |


## Testing

Run unit and integration tests:

```bash
yarn test
# or npm test
```

## Linting & Formatting

* **Lint:** `yarn lint`
* **Format:** `yarn format`

Ensure your code adheres to defined ESLint rules and Prettier formatting standards before committing.

## Contact

Maintainer: **Your Name**

* GitHub: [mtlingaro](https://github.com/mtlingaro)
* Email: [tuszynski.michal92@gmail.com](mailto:tuszynski.michal92@gmail.com)

---

*Last updated: May 29, 2025*
