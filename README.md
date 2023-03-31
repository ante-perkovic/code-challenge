# Digihey code-challenge

Small code-challenge written in Javascript using a few simple libraries.

## How to run

- `npm install`
- `npm start`

  To run tests navigate to the test folder and run `mocha encoder.test.js`

## How to use

Navigate to `localhost:3000/`

Click on "Encode page" button to show encode page.
Try to encode some text. It should redirect you to a login page.

You can login with these credentials:

- Email: `optimus.prime@autobots.com`
- Password: `validPassword1234!`

Now you can Click on "Encode page" button again, and try to encode your text.
It should display the ecoded text under "Encoded text:".

## Things to improve

For this code challenge I used the existing login and authorization functions and didn't modify them.
Since the authorization function gets the auth token from the headers, there isn't a way to redirect to a
protected page while also passing a token in the headers. I intentionally left the GET /encode endpoint unprotected
for ease of use. If I didn't do so, you would have to access that page using a tool like Postman, so you can
pass the token manually through the headers. The POST request on /encode endpoint is protected and you can't access
it without logging in.

This can be fixed by using a different way of authorization, for example JWT authentification on the server-side.

If I were to redo the task, I would recreate it from the ground up. Probably using a different language, and of course frameworks for both the backend and the frontend, which would greatly improve user experience and security.
However I was limited on time because personal work got in the way.
