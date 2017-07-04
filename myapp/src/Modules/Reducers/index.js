import {combineReducers} from 'redux';
import AppConfigReducers from './reducers-appConfig.js';
import InsuranceContractReducers from './reducers-InsuranceContract.js';
import ChangeValueReducers from './reducers-changeValue.js';
import SetAmountInstallmentReducers from './reducers-setAmountInstallment.js';
import setDetermiteReducers from './reducers-setDetermite.js';
import setResultReducers from './reducers-setResult.js';

const allReducers = combineReducers({
  AppConfig : AppConfigReducers,
  InsuranceContract : InsuranceContractReducers,
  ChangeValue : ChangeValueReducers,
  amountInstallment : SetAmountInstallmentReducers,
  isDetermite : setDetermiteReducers,
  result : setResultReducers
});

export default allReducers;
