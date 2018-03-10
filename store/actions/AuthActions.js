import firebase from 'firebase';
import { LOGIN_USER_START, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS} from './types';

//loginUserStart, activa el loading
const loginStart = () => {
	return {
		type: LOGIN_USER_START
	};
}

//loginUserFail, activa el error
const loginUserFail = (error) => {
	return {
		type: LOGIN_USER_FAIL,
		error: error
	};
}

//loginUserSuccess
const loginUserSuccess = (user) => {
	return {
		type: LOGIN_USER_SUCCESS,
		user: user
	};
}

//loginUser
export const loginUser = ({sino}) => {
	return dispatch => {
		dispatch(loginStart());
		setTimeout(() => { 
			if(sino) {
				dispatch(loginUserSuccess("Usuario elegido"));
			} else {
				dispatch(loginUserFail("Sorry but this user cant login"));
			}
		}, 1000);
	}
};

/*
	
*/