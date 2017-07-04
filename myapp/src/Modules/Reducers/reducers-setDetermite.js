export default function (state=null,action){
  switch(action.type){
    case "SET_DETERMITE":
    return action.payload;
    break;
  }
  return false;
}
