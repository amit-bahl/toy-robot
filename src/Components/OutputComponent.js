import React, { Component } from 'react';

class OutputComponent extends Component {
  render() {
    return (
      this.props.output && 
        <div className='Output-Component'>
            <h6 className='p-1'>Output</h6>
            <pre className='p-3'>{this.props.output}</pre>
        </div>
    );
  }
}

export default OutputComponent;