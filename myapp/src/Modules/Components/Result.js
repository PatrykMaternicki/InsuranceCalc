import React, { Component } from 'react';
import {connect} from 'react-redux';

class Result extends Component {
  render(){
    return (
    <div className="app-result">
    {this.props.result}
    <span className="app-result-span">
    Zł
    </span>
    </div>
  );
  }
}

function mapStateToProps(state){
  return{
    result : state.result
  }
}

export default connect(mapStateToProps)(Result);
