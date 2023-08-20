# Workflow CA - NorOff

## Installation

Clone and run cli commands

```
npm i
npm run build
```

Linting is added through git hooks and utilizes ESLint and Prettyfier.

## Unit tests

- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage

## E2E tests

- The user can log in and access their profile
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log out with the logout button

  [![Code Review](https://github.com/CamillaHorneland/social-media-client/actions/workflows/gpt.yml/badge.svg?branch=workflow)](https://github.com/CamillaHorneland/social-media-client/actions/workflows/gpt.yml)


