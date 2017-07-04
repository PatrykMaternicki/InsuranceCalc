export default function (state=null,action){
  switch(action.type){
    case "SET_RESULT":
    return action.payload;
    break;
  }
  return state;
}
