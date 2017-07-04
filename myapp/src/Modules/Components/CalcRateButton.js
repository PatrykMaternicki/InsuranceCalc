import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Controler from '../../Controler.js';
import {setResult} from '../Actions/index.js'

class CalcRateButton extends Component {

    activeCalculator (){
      var controler = new Controler();
      let result = controler.calcRate(
        this.props.insuranceValue,
        this.props.amountInstallment,
        this.props.isDetermite
      );
      this.props.setResult(result);
    }
    render(){
      return(
        <button className="app-buttonCalc" onClick={()=>this.activeCalculator()}>Oblicz ratę</button>
      );
    }


}
function matchDispatchToProps(dispatch){
  return bindActionCreators({setResult : setResult}, dispatch);
}

function mapStateToProps(state){
  return{
    insuranceValue : state.ChangeValue,
    amountInstallment : state.amountInstallment,
    isDetermite : state.isDetermite
  }
}
  export default connect(mapStateToProps,matchDispatchToProps)(CalcRateButton);
