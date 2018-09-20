import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import InputComponent from '../../Components/InputComponent';
import ResultComponent from '../../Components/ResultComponent';
import { fetchDefaultValue, textChanged, addObj, removeObj } from '../../actions/CustomTextInputActions';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterOfBlock: [],
    };
    this.addBlock = this.addBlock.bind(this);
  }
  
  componentWillMount(){
    this.props.fetchDefaultValue()
  }
  
  addBlock(){
    const id = this.state.counterOfBlock.length;
    this.props.addObj(id+ 1);
    this.setState({
      counterOfBlock: this.state.counterOfBlock.concat( id )
    })
  }
  

  render() {
    return (
      <div className="Home">
        <ResultComponent
          result = {this.props.InputReducer}
        />
        {
          Object.keys(this.props.InputReducer).map(item =>
            <InputComponent
              key={item}
              id={item}
              textChanged = {this.props.textChanged}
              value={this.props.text}
              removeObj={this.props.removeObj}
              result = {this.props.InputReducer[item]}
            />
          )
        }
        <div className="add-button">
            <a onClick={this.addBlock}>Add</a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    InputReducer: state.InputReducer,
});

export default connect(mapStateToProps, { fetchDefaultValue, textChanged, addObj, removeObj })(Home);
