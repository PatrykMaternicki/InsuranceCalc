import BasicContributionStrategy from './BasicContributeStrategy.js';
import Config from './CalculatorConfig.js';
class Calculator {
  constructor(insuranceValue,amountInstallment,isDetermite){
    this.insuranceValue = insuranceValue,
    this.amountInstallment = amountInstallment,
    this.isDetermite = isDetermite;
    this.rate;
    this.config = new Config();
    this.calc();
  }

  getRate (){
    return this.rate;
  }
  setValue (value){
    this.insuranceValue = value;
  }
  setAmountInstallment (value){
    this.amountInstallment  = value;
  }
  setDetermite (value){
    this.isDetermite = value;
  }
  calc(){
    this.calcBasicContribution();
    if (!this.isDetermite){
      this.reduceRate(this.config.getRatePercentNoDetermite());
    }
    else{
      this.increaseRate(this.config.getRatePercentDetermite());
    }
    if (this.amountInstallment == 1){
      this.reduceRate(this.config.getRatePercentOneOffPayment());
      this.roundRate();
      return;
    }
    if (this.amountInstallment == 4){
      this.increaseRate(this.config.getRatePercentPayFourInstallment());
    }
    this.roundRate();

  }
  roundRate(){
    this.rate=Math.ceil(this.rate);
  }


  calcBasicContribution(){
    let Strategy = new BasicContributionStrategy(this.insuranceValue);
    this.rate = Strategy.chooseBasicContribution();
  }
  reduceRate(percent){
    let result = (this.rate * percent)/100;
    this.rate = this.rate - result;
  }
  increaseRate(percent){
    let result = (this.rate*percent)/100;
    this.rate =this.rate + result;
  }
}


export default Calculator;
