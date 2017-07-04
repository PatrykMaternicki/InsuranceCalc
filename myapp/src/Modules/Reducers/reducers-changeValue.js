export default function (state=null,action){
  switch(action.type){
    case "VALUE_CHANGE":
    return action.payload;
    break;
  }
  return state;
}
