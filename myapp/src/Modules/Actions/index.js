export const changeContractValue = (InsuranceContract) =>{
  return {
    type: "VALUE_CHANGE",
    payload: InsuranceContract
  }
}
export const setAmountInstallment = (amountInstallment) =>{
  return{
    type:"SET_AMOUNT_INSTALLMENT",
    payload:amountInstallment
  }
}

export const setDetermite = (isDetermite) =>{
  return {
    type:"SET_DETERMITE",
    payload:isDetermite
  }
}

export const setResult = (result) =>{
  return {
    type:"SET_RESULT",
    payload:result
  }
}
