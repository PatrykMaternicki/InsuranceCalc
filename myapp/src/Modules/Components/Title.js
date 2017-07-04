import React, { Component } from 'react';
import {connect} from 'react-redux';

class Title extends Component {
  render() {
    return (
    <div className="app-title-container">
    <h1 className="app-title">{this.props.title}</h1>
    </div>
    );
  }
}

function mapStateToProps(state){
  return{
    title : state.AppConfig.titleApp
  }
}

export default connect(mapStateToProps)(Title);
