import React, {Component} from 'react'
import ToyBoard from '../Components/ToyBoard'
import ToyRobot from '../Components/ToyRobot'
//TODO:: Import all the commands using and intermediate index.js
import PlaceCommand from '../Commands/PlaceCommand'
import MoveCommand from '../Commands/MoveCommand'
import LeftCommand from '../Commands/LeftCommand'
import RightCommand from '../Commands/RightCommand'
import ReportCommand from '../Commands/ReportCommand'
import InvalidCommand from '../Commands/InvalidCommand'

class Simulator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            boardWidth: 5,
            boardHeight: 5,
            direction: null,
            position: null,
            error: null,
            report: false
        }
    }

    _parseCommand = (command) => {
        let {boardHeight, boardWidth} = this.state
        let commandExecutor
        switch (true) {
            case new RegExp(`^place [0-${boardWidth}],[0-${boardHeight}],(North|South|East|West)$`, 'i').test(command):
                let commandArgs = command.trim().split(' ')[1].split(',')
                commandExecutor = new PlaceCommand([parseInt(commandArgs[0]), parseInt(commandArgs[1])], commandArgs[2])
                break;
            case /^move$/i.test(command.trim()):
                commandExecutor = new MoveCommand()
                break;
            case /^right$/i.test(command.trim()):
                commandExecutor = new RightCommand()
                break;
            case /^left$/i.test(command.trim()):
                commandExecutor = new LeftCommand()
                break;
            case /^report$/i.test(command.trim()):
                commandExecutor = new ReportCommand()
                break;
            default: 
                commandExecutor = new InvalidCommand()
                break;
        }
        return commandExecutor
    }

    userInputHandler = (e) => {
        if(e.key=='Enter') {
            this.handleCommand(e.target.value)
        }
    }   

    handleCommand = (action) => {
        let defaultValue = {error: null, report: false}
        let executor = this._parseCommand(action)
        let updatedState = executor.execute(this.state.position, this.state.direction,
            this.state.boardWidth, this.state.boardHeight)   
        this.setState({...defaultValue, ...updatedState})
    }

    render() {
        let {boardHeight, boardWidth, position, direction, report} = this.state
        return <div className='App-Container'>
            <div className='command-input'>
                Enter Command: <input type='text' onKeyPress={this.userInputHandler}></input>
                <button className='action-btn' onClick={()=>{this.handleCommand('move')}}>Move</button>
                <button className='action-btn' onClick={()=>{this.handleCommand('left')}}>Turn Left</button>
                <button className='action-btn' onClick={()=>{this.handleCommand('right')}}>Turn Right</button>
                <button className='action-btn' onClick={()=>{this.handleCommand('report')}}>Report</button>
                <div className='command-error'>{this.state.error}</div>
            </div>
            <ToyBoard width={boardWidth} height={boardHeight} position={position}>
                <ToyRobot orientation={direction} report={report} position={position}/>
            </ToyBoard></div>
    }
}

export default Simulator;