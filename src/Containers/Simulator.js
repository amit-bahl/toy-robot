import React, {Component} from 'react'
import ToyBoard from '../Components/ToyBoard'
import ToyRobot from '../Components/ToyRobot'
import InputComponent from '../Components/InputComponent.js';
import Robot from "../Robot.js";

class RobotContainer extends Component {
  constructor(props) {
    super(props);
    this.robot = Robot();
    this.state = {
      "x": 0,
      "y": 0,
      "f": "U",
      "output": [],
      report: false
    }
  }

  runProgram = (program) => {
    let instructions = program.split("\n").filter(line => line.trim());
    let output;
    try {
      output = this.robot.go(instructions);
    }
    catch(err) {
      output = err.message;
    }

    let coords = this.robot.getCoordinates();

    this.setState({
      "x": coords[0],
      "y": coords[1],
      "f": coords[2],
      "output": output
    });
  }
  
  render() {
      let errorMessage = ''
      if(typeof(this.state.output)=='string') {
          errorMessage = this.state.output
      }
    return (
      <div className='App-Container'>
        <InputComponent runProgramCallback={this.runProgram} error={errorMessage}/>
        <ToyBoard width={5} height={5} position={[this.state.x, this.state.y]}>
            <ToyRobot orientation={this.state.f} report={this.state.output.length>0} position={[this.state.x, this.state.y]}/>
        </ToyBoard>
      </div>
    );
  }
}

export default RobotContainer;