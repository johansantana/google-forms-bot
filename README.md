# Puppeteer BOT for Google Forms auto-fill

This repository contains the necessary files and instructions to set up and start working on a Node.js project.

## Prerequisites

Before getting started, make sure you have the following installed on your system:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node.js package manager): Usually installed along with Node.js

## Installation

Follow the steps below to set up the project on your local machine:

1. **Clone the Repository**

2. **Install Dependencies:**

Navigate to the root folder of the project and run the following command to install all the necessary dependencies:

```shell
npm install
```

## Usage

Once you have set up the project, you can start developing your application. Make sure to make the following modifications:

1. **Modify the url and Participants count:**

The `src/constants.ts` file contains the form configuration. Here, you can modify the `URL` variable with the URL of the form you want to fill. You can also modify the `PARTICIPANTS_COUNT` based on how many answers you want.

2. **Modify the Questions Variable:**

In the same `src/constants.ts` file, modify the `QUESTIONS_MAP` variable. This is an array containing all the questions from the form. The format for each question is:

```js
{ value: int(0-3), probability: float(0-1) }
```

Add as many elements to the array as questions your form has.

To run the application, use the following command:

```shell
npm run dev
```
