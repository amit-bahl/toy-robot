import React, {Component} from 'react'
import ToyBoard from '../Components/ToyBoard'
import ToyRobot from '../Components/ToyRobot'
import InputComponent from '../Components/InputComponent.js';
import OutputComponent from '../Components/OutputComponent.js';
import Robot from "../Robot.js";

/**
 * Smart Component where all the application logic executed and the application state is maintained.
 */
class Simulator extends Component {
    constructor(props) {
        super(props);
        /** Injecting the Robot business logic into the smart component */
        this.robot = Robot();
        /** State definition:
         * x<integer>: stores the x coordinate of the robot
         * y<integer>: stores the y coordinate of the robot
         * f<string>: stores the facing direction of the robot
         * output<Array>: stores the output of any command which returns a message or throws an error.
         * report<Boolean>: Stores the boolean value to show the output box
         * executionStep<integer>: stores the execution step of the program for step by step execution 
         */
        this.state = {
        "x": 0,
        "y": 0,
        "f": "U",
        "output": [],
        report: false,
        executionStep: null
        }
    }
   
    /** Takes the user input program and passed it to the Robot business logic.*/
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

    /** Takes the user input program and executes the commands step by step*/
    runStep = (program) => {
        let instructions = program.split("\n").filter(line => line.trim());
        let {executionStep} = this.state;
        if(executionStep===null || executionStep >= instructions.length-1) {
            executionStep=0;
        }
        else {
            executionStep+=1;
        }
        this.setState({executionStep}, ()=>{
            this.runProgram(instructions[executionStep]);
        })
    }

    /** Resets the step execution counter if the user changes the program*/
    resetStepCounterOnChange = () => {
        this.setState({executionStep: null});
    }

    /** Resets the step execution counter if the user changes the program*/
    resetProgram = () => {
        this.robot = Robot();
        this.setState({executionStep: null}, ()=>{
            this.runProgram("")
        });
    }

  render() {

    let output = ''
    if(typeof(this.state.output)=='string') {
        output = this.state.output
    }
    else {
        output = this.state.output.join(' ')
    }

    return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Robot Challenge</span>
        </nav>        
        <div className='app-container row'>
            <div className='app-sidebar col-sm-12 col-md-3 pl-4 pr-4'>
                <InputComponent inputCallback={this.resetStepCounterOnChange} runProgramCallback={this.runProgram} resetCallback={this.resetProgram} runStepCallback={this.runStep}/>
                <OutputComponent output={output}/>
            </div>
            <div className='col-md-9 col-sm-12'>
                <ToyBoard width={5} height={5} position={[this.state.x, this.state.y]}>
                    <ToyRobot orientation={this.state.f} report={this.state.output.length>0} position={[this.state.x, this.state.y]}/>
                </ToyBoard>
            </div>
        </div>
    </div>
    );
  }
}

export default Simulator;