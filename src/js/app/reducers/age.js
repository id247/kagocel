import * as actions from '../actions/age';

export function age(state = 10, action) {
	switch (action.type) {
		case actions.AGE_SET:
			return action.payload;
		default:
			return state
	}
}


