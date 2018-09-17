import React, { Component } from 'react';
import './styles/ToyRobot.css';

/** 
 * Dumb Components which shows the robot using the orientation props
 */
class ToyRobot extends Component {

    render() {
        return <div className='toy-robot'>
            <img alt="" className={`toy-robot-image ${this.props.orientation}`} />
        </div>
    }
}

export default ToyRobot;