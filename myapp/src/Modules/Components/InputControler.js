import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeContractValue} from '../Actions/index.js';

class InputControler extends Component {

  constructor(props){
    super(props);
    this.state={
    startValue: 3000,
    width:30,
    }
    this.spanStyle = {
      transform: "translateX (" + this.state.startValue + " px )"
    }
this.handleChange = this.handleChange.bind(this);


  }

  handleChange(event){
    this.setState({startValue:event.target.value})
    this.calculateTransform(event.target.value)
    this.props.changeContractValue(event.target.value);

  }
  calculateTransform(value){
  let parseMaxToNum = Number.parseInt(this.props.max);
  let result = (value/parseMaxToNum)*100;
  result = result.toFixed(2);
  this.setState({width:result})
  }

  decreaseValue(){
    let min = Number.parseInt(this.props.min);
    if (this.state.startValue <= min ){
      this.setState({startValue:min});
      this.calculateTransform(min);
      return;
    }
    let result = this.state.startValue - 100;
    this.setState({startValue:result});
    this.calculateTransform(result);
    this.props.changeContractValue(result);
  }

  increaseValue(){
    let max = Number.parseInt(this.props.max);
    if (this.state.startValue >= max ){
      this.setState({startValue:max});
      this.calculateTransform(max);
      return;
    }
    let result = this.state.startValue + 100;
    this.setState({startValue:result});
    this.calculateTransform(result);
    this.props.changeContractValue(result);
  }







    render() {
      return (
      <div className="app-wraperRange">
      <input className="app-inputRange"
      min={this.props.min} max={this.props.max}
      value={this.state.startValue}
      type={this.props.typeInput} step={this.props.step} list="rangeMoney"
      onChange={this.handleChange.bind(this)}
      style={{background: "linear-gradient(to right, #ff3d2e " + this.state.width+"%, #9DBDC6 " +this.state.width+"% )"}}
      />
      <span className="app-range">{this.props.infoLineMin}</span>
      <span className=" app-range app-rangeMax">{this.props.infoLineMax}</span>
      <div className="app-buttonWraper">
      <input className="app-buttonArrow" type="button" value="<" onClick={()=>this.decreaseValue()} /><span className="app-currentValue">{this.state.startValue}</span><input onClick={()=>this.increaseValue()} className="app-buttonArrow" type="button" value=">" />
      </div>
      <span className="app-rangeCurrentValue" style={{width:this.state.width+"%"}}>{this.state.startValue}</span>
      </div>
      );
    }
  }
function  mapStateToProps(state){
    return {
      min : state.AppConfig.valueMin,
      max : state.AppConfig.valueMax,
      step : state.AppConfig.step,
      infoLineMax : state.AppConfig.infoLineMax,
      infoLineMin : state.AppConfig.infoLineMin
    }
  }
  function matchDispatchToProps(dispatch){
    return bindActionCreators({changeContractValue: changeContractValue}, dispatch);
  }


export default connect(mapStateToProps,matchDispatchToProps)(InputControler);
