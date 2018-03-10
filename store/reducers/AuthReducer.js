import {LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_START} from '../actions/types';
const INITIAL_STATE = {user: null, error: null, loading: false};

export default (state=INITIAL_STATE, action) => {
	switch(action.type){
		case LOGIN_USER_START:
			return {...state, loading: true};
		case LOGIN_USER_FAIL:
			return {...state, error: action.error, loading: false};
		case LOGIN_USER_SUCCESS:
			return {...state, user: action.user, loading: false};
		default:
			console.log("Hola mundo denuevo");
			return state;
	}
}