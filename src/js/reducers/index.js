import { combineReducers } from 'redux';

import { error } from './error';
import { user } from './user';
import { loading } from './loading';
import { page } from './page';
import { age } from './age';

const rootReducer = combineReducers({
	error,
	loading,
	user,
	page,
	age,
});

export default rootReducer;
