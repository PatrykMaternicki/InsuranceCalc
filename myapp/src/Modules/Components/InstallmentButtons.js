import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setAmountInstallment} from '../Actions/index.js';
import {bindActionCreators} from 'redux';


class InstallmentButtons extends Component {

  setAmountInstallment(value){
    this.props.setAmountInstallment(value);
  }
  render(){
    return(
    <div className="app-flexbox">
      <label className="app-button">
        <input id="oneAmountInstalment" type="radio" onClick={()=>this.setAmountInstallment(1)} name="installment" />
        <span className="app-textButton">1 Rata</span>
      </label>
      <label className="app-button">
        <input id="twoAmountInstalment" type="radio" onClick={()=>this.setAmountInstallment(2)} name="installment" />
        <span className="app-textButton">2 Raty</span>
      </label>
      <label className="app-button">
        <input id="threeAmountInstalment" type="radio" onClick={()=>this.setAmountInstallment(3)} name="installment" />
        <span className="app-textButton">3 Raty</span>
      </label>
      <label  className="app-button">
        <input id="fourAmountInstalment" type="radio" onClick={()=>this.setAmountInstallment(4)} name="installment" />
        <span className="app-textButton">4 Raty</span>
      </label>
    </div>
  );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({setAmountInstallment:setAmountInstallment}, dispatch);
}

function mapStateToProps(state){
  return{

  }
}

export default connect(mapStateToProps,matchDispatchToProps)(InstallmentButtons);
