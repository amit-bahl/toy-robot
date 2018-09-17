## Design Notes

1. `Robot.js` has the main business logic. It is pure javascript, and has no dependencies on react or on the dom.
2. `Robot.test.js` exercises all the business methods
3. `Simulator.js` maintains the react state. It has the UI specific logic
4. `ToyRobot`, `InputComponent`, `OutputComponent` and `ToyBoard` are dump components. They take inputs as props and render themselves. `

## Setup

1. Install the dependencies using - `npm install`
2. Running the application - `npm start`
3. Running the testcases - `npm run test`

## Assumptions

1. Since the UI screens weren’t given, he assumed a simple interface with Input section and the simple output
2. Created two approaches (a) Run All - This will run all input in one go (b) Run Step - On click it will run stepwise on the input provided
3. Have created basic error checks (a) If the input is wrong (b) Don’t execute the steps that allow the robot to fall from the grid

## Future Improvements

1. Add animation
2. Can have buttons for the {Left, Right, Move}, {Initialise, Restart}, Report for easy navigation
3. Preserve History, Redo, Undo
4. Internationalisation
5. Styled-components