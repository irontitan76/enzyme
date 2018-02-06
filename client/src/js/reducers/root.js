import { combineReducers } from 'redux';

import articles from './articles';
import nav from './nav';

export default combineReducers({
  nav,
  articles
});
