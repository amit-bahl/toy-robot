function Robot() {

    let faceToInt = {"E":0, "N":1, "W":2, "S":3};
    let intToFace = ["E", "N", "W", "S"];
    var x = -1, y = -1,
      face = 0, xmax = 4, ymax = 4;
    
    var hasBeenPlaced = function() {
      return x !== -1 
              && y !== -1
              && face !== -1;
    }
  
    // stepX and stepY are internally used by move / canMove
    // depending on the current direction, they 1, 0 or -1, 
    // indicating the change in current position
    var stepX = function() {
      if (face === 0) {
        return 1;
      }
      else if (face === 2) {
        return -1;
      }
      else {
        return 0;
      }
    }
    var stepY = function() {
      if (face === 1) {
        return 1;
      }
      else if (face === 3) {
        return -1;
      }
      else {
        return 0;
      }
    }
  
    // Ensures robot does not fall from the table
    var canMove = function() {
      if (!hasBeenPlaced()) {
        return false;
      }
      let newx = x + stepX();
      let newy = y + stepY();
      if (newx > xmax || newx < 0) {
        return false;
      }
      if (newy > ymax || newy < 0) {
        return false;
      }
      return true;
    }
  
    var move = function() {
      if (!canMove()) {
        return;
      }
  
      x = x + stepX();
      y = y + stepY();
    }
  
    // places a robot on a given cell on the table
    // can raise an exception if arguments are incorrect
    var place = function(_newx, _newy, _newface) {
      let newx = parseInt(_newx, 10);
      let newy = parseInt(_newy, 10);
      let newface = _newface.toUpperCase();
  
      if (newx < 0 || newx > xmax) {
        throw new Error("x out of range " + newx);
      }
      if (newy < 0 || newy > ymax) {
        throw new Error("y out of range " + newy);
      }
      
      if (!faceToInt.hasOwnProperty(newface)) {
        throw new Error("invalid face " + newface);
      }
  
      x = newx;
      y = newy;
      face = faceToInt[newface];
    }
    var left = function() {
      face = (face + 1) % 4;
    }
    var right = function() {
      face = (face + 3) % 4;
    }
    var reportCoordinates = function() {
      return [x, y, intToFace[face]];
    }
    var report = function() {
      if (!hasBeenPlaced()) {
        throw new Error("place must be called before report");
      }
      return x + " " + y + " " + intToFace[face];
    }
    /* Takes an array of instructions, and returns an array of outputs
        This is the only public function of this module
        - Instruction are of the form "MOVE" or "PLACE 0 0 N"
        - Output is an array of string
        - Each string in the output corresponds to a report call
        - The string is in the form "1 2 E"
    */
    var runProgram = function(instructions) {
      let output = [];
      let commands = {"place": place, 
                      "left": left, "right": right, 
                      "move": move, "report": report};
  
      instructions.forEach((instruction) => {
        let tokens = instruction.split(" ");
        let command = tokens[0].toLowerCase();
        if (!commands.hasOwnProperty(command)) {
          throw new Error("Invalid command " + command);
        }
        let handler = commands[command];
        let params = tokens.slice(1);
        let out = handler.apply(null, params);
        if (out) {
          output.push(out);
        }
      });
  
      return output;
    }
  
    return {"go": runProgram, "getCoordinates": reportCoordinates};
  }
  
  export default Robot;