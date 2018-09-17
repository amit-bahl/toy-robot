import React, { Component } from 'react';

/** 
 * Component to render the output of the program execution
 */
class OutputComponent extends Component {
  render() {
    return (
      this.props.output &&
      <div className='output-component'>
        <h6 className='my-3'>Output</h6>
        <pre className='p-3'>{this.props.output}</pre>
      </div>
    );
  }
}

export default OutputComponent;