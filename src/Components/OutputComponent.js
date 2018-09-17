import React, { Component } from 'react';

  /** Dumb component to render the output of the program execution*/
class OutputComponent extends Component {
  render() {
    return (
      this.props.output && 
        <div className='output-component'>
            <h6 className='p-1'>Output</h6>
            <pre className='p-3'>{this.props.output}</pre>
        </div>
    );
  }
}

export default OutputComponent;