import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setDetermite} from '../Actions/index.js';


class DetermiteButtons extends Component {

  constructor(props){
    super(props);
    this.state={
    buttonsIsActive: false,
    value: null
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick (value,idButton){
    this.props.setDetermite(value);
  }

  render (){
    return (

      <div className="app-determiteButtonWrapper app-determiteButtonWrapper--paddingtop">
        <label className="app-button app-button--margin">
          <input id="isNotDetermite" type="radio" onClick={this.handleClick.bind(false,1)} name="determite" />
          <span className="app-textButton">brak szkód</span>
        </label>
        <label className="app-button app-button--margin">
          <input type="radio" className="" onClick={this.handleClick.bind(true,2)} name="determite"/>
          <span className="app-textButton">wyrządzona szkoda</span>
        </label >
        <div className = "app-aboutNewClient">Brak wyboru oznacza nowego klienta bez przeszłości</div>
      </div>
    );
  }
}

  function matchDispatchToProps(dispatch){
    return bindActionCreators({setDetermite : setDetermite}, dispatch);
  }

  function mapStateToProps(state){
    return{

    }
  }

  export default connect(mapStateToProps,matchDispatchToProps)(DetermiteButtons);
