import {CounterAction} from '../action/counterAction'


const INITIAL_STATE = {
    count: 0,
    textArr:[
      
    ],
};

export function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CounterAction.Increment:
    return Object.assign({}, state, { count: state.count + 1 });
  case CounterAction.Decrement:
    return Object.assign({}, state, { count: state.count - 1 });
  case CounterAction.showText:
    let newStateObj = Object.assign({}, state)
    newStateObj.count +=1;
    var objId = newStateObj.textArr.length+1;
    newStateObj.textArr.push({ id: objId, text: action.text });
    return newStateObj;
  default:
    return state
  }
}