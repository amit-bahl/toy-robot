import Robot from './Robot';

test('north bounds', () => {
  let robot = Robot();
  let instructions = ["place 0 3 N", "move", "move", "report"];

  let outputs = robot.go(instructions);
  expect(outputs[0]).toBe("0 4 N");
});

test('south bounds', () => {
  let robot = Robot();
  let instructions = ["place 0 1 S", "move", "move", "report"];

  let outputs = robot.go(instructions);
  expect(outputs[0]).toBe("0 0 S");
});

test('west bounds', () => {
  let robot = Robot();
  let instructions = ["place 1 0 W", "move", "move", "report"];

  let outputs = robot.go(instructions);
  expect(outputs[0]).toBe("0 0 W");
});

test('east bounds', () => {
  let robot = Robot();
  let instructions = ["place 3 0 E", "move", "move", "report"];

  let outputs = robot.go(instructions);
  expect(outputs[0]).toBe("4 0 E");
});

test('multiple report statements', () => {
  let robot = Robot();
  let instructions = ["place 0 0 N", "move", "report", "move", "report"];
  let outputs = robot.go(instructions);
  expect(outputs[0]).toBe("0 1 N");
  expect(outputs[1]).toBe("0 2 N");
});

test('test invalid place instruction', () => {
  let robot = Robot();
  let instructions = ["place -1 4 N", "report"];
  expect(() => robot.go(instructions)).toThrow();
});

test('test report before place', () => {
  let robot = Robot();
  let instructions = ["report", "place -1 4 N"];
  expect(() => robot.go(instructions)).toThrow();
});

test('move before place is ignored', () => {
  let robot = Robot();
  let instructions = ["move", "move", "place 0 0 N", "move", "report"];
  let outputs = robot.go(instructions);
  expect(outputs[0]).toBe("0 1 N");
});

test('move left', () => {
  let robot = Robot();
  let instructions = ["place 1 0 N", "left", "report"];
  let outputs = robot.go(instructions);
  expect(outputs[0]).toBe("1 0 W");
});

test('move left', () => {
  let robot = Robot();
  let instructions = ["place 1 0 S", "right", "report"];
  let outputs = robot.go(instructions);
  expect(outputs[0]).toBe("1 0 W");
});