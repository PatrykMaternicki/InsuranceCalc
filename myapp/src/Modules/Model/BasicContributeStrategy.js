class BasicContributionStrategy{

constructor(insuranceValue){
  this.insuranceValue=insuranceValue;
  this.chooseBasicContribution();
}

  chooseBasicContribution(){
    if (this.isInsuranceValueMoreThen(3001) && this.isInsuranceValueLowThen(6001)){
      return 130;
    }
    if (this.isInsuranceValueMoreThen(3001)){
      return this.pickValueHighTree();
    }
    else{
      return this.pickValueLowTree();
    }
  }

  pickValueHighTree(){
    if (this.isInsuranceValueMoreThen(9001)){
      return 200;
    }
    return 180;
  }

  pickValueLowTree(){
    if(this.isInsuranceValueMoreThen(1001)){
      return 70;
    }
    return 20;

  }


  isInsuranceValueMoreThen(value){
    return this.insuranceValue > value;
  }
  isInsuranceValueLowThen(value){
    return this.insuranceValue < value;
  }

}

export default BasicContributionStrategy;
