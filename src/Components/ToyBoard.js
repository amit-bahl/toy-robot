import React, { Component } from 'react'
import './styles/ToyBoard.css'

/** 
 * Component which creates a grid of M x N size squares based on the props and places the robot in it
 */
class ToyBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            height: props.height,
            width: props.width
        }
    }

    /**
     * Generates board and places the robot to the given position
     */
    _generateBoard = () => {
        let { height, width } = this.state;

        let heightArray = new Array(height);
        let widthArray = new Array(width);

        let boardRows = heightArray.fill(0).map((val, index) => {
            return (
                <div className='row' key={index}>
                    {
                        widthArray.fill(0).map((v, i) => {
                            return (
                                <div className='box' key={`row-${index}-cell-${i}`}>
                                    <div className='cell-container'>
                                        {
                                            // Places the robot inside the cell-container, if position matches
                                            this.props.position && this.props.position[0] === i && this.props.position[1] === (height - index - 1)
                                                ? this.props.children
                                                : null
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })
        return boardRows;
    }

    /**
     * Generates board and robot
     */
    render() {
        let board = this._generateBoard();

        return (
            <div className='grid'>
                {board}
            </div>
        )
    }
}

export default ToyBoard;