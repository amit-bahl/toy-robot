import React, {Component} from 'react'
import styles from './styles/ToyRobot.css'
class ToyRobot extends Component {
    
    render() {
        return <div className='toy-robot'>
            <img className={`toy-robot-image ${this.props.orientation}`} />
        </div> 
    }
}

export default ToyRobot