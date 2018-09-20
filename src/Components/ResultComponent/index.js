import React, { Component } from 'react';

export class ResultComponent extends Component {
  constructor(props) {
    super(props);
  }
  
capitalize(str) {
  
  let connectives = {
    das: true,
    da: true,
    dos: true,
    do: true,
    de: true,
    e: true
  };
  
  return str
      .split(" ")
      .map(function(word) {
        return !connectives[word.toLowerCase()]
          ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          : word.toLowerCase();
      })
      .join(" ");
  };

  
  formattingTheText(text){
    if(!text){
      return '';
    }
    let outString = text.replace(/[`~!@#$%^&*()|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    return this.capitalize(outString);
  }
  render() {
    const displayingText = Object.keys(this.props.result).map(i => this.formattingTheText(this.props.result[i].value));
    return (
      <div
        className='wrap-for-result'
      >
        <div
          className='wrap-for-result-text'
        >
          {
            displayingText.length > 1?  displayingText.join(' - ') : displayingText
          }
        </div>
      </div>
    )
  }
}

ResultComponent.defaultProps = {result: ''};

export default ResultComponent;