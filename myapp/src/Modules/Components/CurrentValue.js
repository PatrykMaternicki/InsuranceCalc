import React, { Component } from 'react';
import {connect} from 'react-redux';

class CurrentValue extends Component {

render () {
  return (
    <span className = "app-span">
    {this.props.changeValue}
    </span>
  )
}



}
function mapStateToProps (state){
  return {
  changeValue:state.ChangeValue,
}
}

export default connect(mapStateToProps)(CurrentValue);
