import React, { Component } from 'react';

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {"value": 'PLACE 0 0 N\nMOVE\nRIGHT\nMOVE\nMOVE\nLEFT\nMOVE\nREPORT\n'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.runProgramCallback(this.state.value);
  }

  render() {
    return (
      <div className='Input-Component'>
        <h2>Input</h2>
        <textarea rows="8" cols="40" value={this.state.value} onChange={this.handleChange}>
        </textarea>
        <div>
            <button type="button" onClick={this.handleSubmit}>Go!</button>
        </div>
        <div className="error-message">{this.props.error}</div>
      </div>
    );
  }
}

export default InputComponent;