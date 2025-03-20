# Event Horizon Liability Solutions

## About

Welcome! You are the newest hire for a shady, cyberspace insurance company: Event Horizon Liability Solutions. In your new cybersecurity role, you will be given tasks to remove rogue files, restore or revoke employee permissions, and submit reports of your findings to The Board.

Good luck navigating your new role as tasks become increasingly morally-gray and you begin to question the true mission of the unsuspected insurance company.

## Utilities

- This repo utilizes Express JWT Auth that is meant to be paired with a front-end app utilizing JWT tokens.
- 

//================================================================================

## Getting started

1. Fork and clone this repository to your local machine.
2. After moving into the cloned directory, run `npm i` to download the dependencies.
3. Create a `.env` file in the root of the project:

```bash
touch .env
```
... and add your MongoDB URI and a secret JWT string to it. Your MongoDB URI will look something like the first entry, but with your username and password:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@sei.azure.mongodb.net/myApp?retryWrites=true
JWT_SECRET=supersecret
```

4. Start the app in your terminal with:

``` sh
npm run dev
```

//==============================================================================

MVP:


//==============================================================================

Routes:

| HTTP Method              | controller | Response | URI | Use Case |
| :----------------:       | :------:    | :----:  | :---- | :---- |
| POST        |   auth   | 201 |  /auth/sign-up |  register and create a new user  |
| POST        |   auth   | 200 |  /auth/sign-in |  log in  |
| GET | users | 200 | /users | get all users |
| GET | users | 200 | /users/:userId | get a user's details |
| GET | users | 200 | /users/:userId/employees | get index of employees |
| POST | users | 201 | /users/:userId/employees | create new employee |
| GET | users | 200 | /users/:userId/employees/:employeeId | get one employee's details |
| PUT | users | 200 | /users/:userId/employees/:employeeId | edit an employee |
| DELETE | users | 200 | /users/:userId/employees/:employeeId | delete an employee |
| GET | users | 200 | /users/:userId/missions/ | get index of missions |
| GET | users | 200 | /users/:userId/missions/:missionId | get one mission's details |
| PUT | users | 200 | /users/:userId/missions/:missionId | edit an mission |