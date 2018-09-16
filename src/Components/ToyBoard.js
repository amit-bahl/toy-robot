import React, {Component} from 'react'
import styles from './styles/ToyBoard.css'
class ToyBoard extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            height: props.height,
            width: props.width
        }
    }

    _generateBoard = () => {
        let {height, width} = this.state
        let heightArray = new Array(height)
        let widthArray = new Array(width)
        let boardRows = heightArray.fill(0).map((val, index)=>{
            return <div className='board-row' key={index}>
            {
                widthArray.fill(0).map((v, i)=>{
                    return <div className='board-cell' key={`row-${index}-cell-${i}`}>
                        {this.props.position && this.props.position[0]==i && this.props.position[1]==(4-index)? this.props.children :null}
                    </div>
                })
            }
            </div>
        })
        return boardRows
    }

    render() {
        let board = this._generateBoard()
        return <div className='board'>
            {board}
        </div>
    }
}

export default ToyBoard;