import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import commentsReducer from '../reducers/Comments/reducers';


export default combineReducers({
  router: routerReducer,
  form: formReducer,
  comments: commentsReducer
})
