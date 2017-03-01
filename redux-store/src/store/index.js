import { combineReducers, createStore } from 'redux';
import {counterReducer} from './reducer/counter';

const rootStore = combineReducers({counterReducer})

let store = createStore(rootStore);

store.subscribe(() =>
  console.log(store.getState().counterReducer)
)


export default store;