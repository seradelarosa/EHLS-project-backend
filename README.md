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

HTTP Method	    Controller	    Response	URI	                    Use Case
POST	        create	        200	        /hoots	                Create a hoot
GET	            index	        200	        /hoots	                List hoots
GET	            show	        200	        /hoots/:hootId	        Get a single hoot
PUT	            update	        200	        /hoots/:hootId	        Update a hoot
DELETE	        deleteHoot	    200	        /hoots/:hootId	        Delete a hoot
POST	        createComment	200	        /hoots/:hootId/comments	Create a comment