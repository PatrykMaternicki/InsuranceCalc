import Calculator from './Modules/Model/Calculator.js';

class Controler {

  constructor(){
    this.calculator;
  }

  calcRate(insuranceValue,amountInstallment,isDetermite){
    if (this.calculator == null){
      this.calculator = new Calculator (insuranceValue,amountInstallment,isDetermite);
      return this.calculator.getRate();
    }
    else{
      this.calculator.setInsurance(insuranceValue);
      this.calculator.SetAmountInstallment(amountInstallment);
      this.calculator.setDetermite(isDetermite);
      this.calculator.calc();
      return this.calculator.getRate();
    }

  }
}

export default Controler;
