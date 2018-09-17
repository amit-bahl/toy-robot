import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import image from './images/tooltip.png'
class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {"value": 'PLACE 0 0 N\nMOVE\nRIGHT\nMOVE\nMOVE\nLEFT\nMOVE\nREPORT\n'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStepExecution = this.handleStepExecution.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value}, this.props.inputCallback);
  }

  handleSubmit(event) {
    this.props.runProgramCallback(this.state.value);
  }

  handleStepExecution(event) {
      this.props.runStepCallback(this.state.value)
  }

  handleReset() {
    this.props.resetCallback()
  }

  render() {
    return (
      <div className='Input-Component form-group'>
        <ReactTooltip place='right' html={true}/>
        <h6 className='p-1'>Input <img src={image} className='mb-1' height='10px' width='10px' data-tip="<b>Sample Commands</b><br/>
        Place X Y F</br>
        Move </br>
        Report </br>
        Left </br>
        Right </br>
        "></img></h6>
        <textarea className="form-control" rows="8" cols="40" value={this.state.value} onChange={this.handleChange}>
        </textarea>
        <div className='mt-2 justify-content-end d-flex'>
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