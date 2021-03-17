# Frontend Test Challenge

## Instructions/ How To Run-

- Clone your this repository to your pc "(git clone `https://github.com/heisdeku/frontend-test.git`)"
- change your directory to the cloned project `cd frontend-test'
- Run `npm install` from inside the cloned project to install the necessary packages
- After run `npm start` after the previous command execution to start the application

## Ground Rules

- On Mount, the application is redirected to the user's profile page while a `GET`request is being dispatched by a redux action.
- Data is being fetched from the api and passed as general state inside the `App /> component

### Answer to Order Items change

My code for the order items would need to use a for loop inside the helper function to check each and every one of the item, then get the order price, quanity and tax then pass it into a reducer function. Instead of calling the reducer function directly on the order items.
