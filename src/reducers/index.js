import {combineReducers} from 'redux';
import cafesReducer from './cafesReducer';
import reviewsReducer from './reviewsReducer';
import usersReducer from './usersReducer';

const allReducers = combineReducers({
  cafes: cafesReducer,
  reviews: reviewsReducer,
  users: usersReducer
})

export default allReducers
