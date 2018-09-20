import React, { Component } from 'react';

export class InputComponent extends Component {
  constructor(props) {
    super(props);
  }
  onTextChange = (text) => {
    this.props.textChanged(text, this.props.id)
  };
  removeBlock(){
    this.props.removeObj(this.props.id)
  }
  render() {
    return (
      <div
        className='wrap-for-the-input'
      >
        <div className='wrap-to-the-text'>
          Enter some text
        </div>
        <input
          className='context-input'
          onChange={(event) => this.onTextChange(event.target.value)}
          placeholder=""
          value={this.props.result.value}
        />
        <a className="red-remove-button" onClick={() => this.removeBlock(this)}>Remove</a>
      </div>
    )
  }
}

export default InputComponent;