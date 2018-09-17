import React, {Component} from 'react'
import image from './triangle.svg'
import styles from './styles/ToyRobot.css'

class ToyRobot extends Component {
  
    render() {
        return <div className='toy-robot'>
            {this.props.report && <div className='speech-bubble'>{`Position: (${this.props.position[0]},${this.props.position[1]}) and Orientation ${this.props.orientation}`}</div>}
            <img className={`toy-robot-image ${this.props.orientation}`} />
        </div> 
    }
}

export default ToyRobot