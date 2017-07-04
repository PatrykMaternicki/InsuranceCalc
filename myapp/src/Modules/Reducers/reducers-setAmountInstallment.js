export default function (state=null,action){
  switch(action.type){
    case "SET_AMOUNT_INSTALLMENT":
    return action.payload;
    break;
  }
  return state;
}
