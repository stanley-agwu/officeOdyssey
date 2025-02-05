[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Office Odyssey

This is a Frontend Web Application for The Office Odyssey App.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Build

For building the application, run the following command:

```bash
npm run build:dev
```

This builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Test

For launching the tests for the application, run the following command:

```bash
npm run test
```

This Launches the test runner in the interactive watch mode and shows the status of all the tests written for the application.

## Test Coverage

For displaying test coverage of the application, run the following command:

```bash
npm run test:ci
```

This Launches the test runner and generates a table of test coverage for all files and folders (directories) of the the application.

## Format

For checking if the code is well formatted, run the following command:

```bash
npm run format
```

For fixing format errors, run the following command:

```bash
npm run format:fix
```

## Lint

For code linting and verifying of code for conformity with coding style, run the following command:

```bash
npm run lint
```

For fixing fixable lint errors, run the following command:

```bash
npm run lint:fix
```

While non-fixable lint errors have to be fixed manually via code review.

## Commit

For code contribution to this repository, it should be noted that this repository is commitizen friendly and follows the Conventional Commits framework [Conventional Commits](https://www.conventionalcommits.org).

For making commits to this project, run the following command:

```bash
npm run commit
```

When you commit, you will be prompted to fill out the commit fields at commit time. You can fill all fields, but the required fields are: the type of commit, the commit title and the commit description.

The commit pattern for this repository:

<commit type>[optional scope]: <Jira ticket number> <description>

examples are:

feat(authentication): BBSREP-1234 create authentication for office odyssey
fix(dashboard): BBSREP-1234 fix error notification on the dashboard

## Mock (Test) Environment

For running application in a test environment with mock data (Mocking API endpoints), run the following command:

```bash
npm run mock
```

This spins up a Mock server with Mock Service Worker (MSW), mocking all API end-points enabling development activities and running application without a Back-end.
