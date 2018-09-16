import React, {Component} from 'react'

export default class Popup extends Component {

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            {this.props.text}
            {this.props.children}
          </div>
          
        </div>
      );
    }
  }