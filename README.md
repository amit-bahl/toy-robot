## Design Notes

1. `Robot.js` has the main business logic. It is pure javascript, and has no dependencies on react or on the dom.
2. `Robot.test.js` exercises all the business methods
3. `RobotContainer.js` maintains the react state. It has the UI specific logic
4. `RobotComponent`, `InputComponent`  are dump components. They take inputs as props and render themselves. `

## Setup

1. Install the dependencies using - `npm install`
2. Running the application - `npm start`
3. Running the testcases - `npm run test`

