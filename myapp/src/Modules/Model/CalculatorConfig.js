class CalculatorConfig {
  constructor(){
    this.ratePercentNoDetermite = 5;
    this.ratePercentDetermite = 8;
    this.ratePercentOneOffPayment = 2;
    this.ratePercentPayFourInstallment = 4;
  }
  getRatePercentNoDetermite (){
    return this.ratePercentNoDetermite;
  }
  getRatePercentDetermite(){
    return this.ratePercentDetermite;
  }
  getRatePercentOneOffPayment () {
    return this.ratePercentOneOffPayment;
  }
  getRatePercentPayFourInstallment (){
    return this.ratePercentPayFourInstallment;
  }
}

export default CalculatorConfig;
