import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import image from './images/tooltip.png'
import { DATA_TOOLTIP } from '../Constants'

/** 
 * Input component which takes input from the user and passed it to the parent using callbacks.
 */
class InputComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { "value": 'PLACE 0 0 N\nMOVE\nRIGHT\nMOVE\nMOVE\nLEFT\nMOVE\nREPORT\n' }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }, this.props.inputCallback)
  }

  handleSubmit = (event) => {
    this.props.runProgramCallback(this.state.value)
  }

  handleStepExecution = (event) => {
    this.props.runStepCallback(this.state.value)
  }

  handleReset = () => {
    this.props.resetCallback()
  }

  render() {
    return (
      <div className='Input-Component form-group'>
        <ReactTooltip place='right' html={true} />
        <h6 className='my-3'>Input <img alt="Commands Information" src={image} className='info-icon' data-tip={DATA_TOOLTIP}></img></h6>
        <textarea className="form-control" rows="8" cols="40" value={this.state.value} onChange={this.handleChange}>
        </textarea>
        <div className='mt-3 justify-content-end d-flex'>
          <button type="button" className='btn btn-danger mr-1' onClick={this.handleReset}>Reset</button>
          <button type="button" className='btn btn-info mr-1' onClick={this.handleStepExecution}>Run Step</button>
          <button type="button" className='btn btn-success' onClick={this.handleSubmit}>Run All</button>
        </div>
        <div className="error-message">{this.props.error}</div>
      </div>
    );
  }
}

export default InputComponent;