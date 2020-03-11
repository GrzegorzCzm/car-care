import { combineReducers } from 'redux';

import navigation from './navigation';
import expenses from './expenses';

const rootReducer = combineReducers({
  navigation,
  expenses,
});

export default rootReducer;
