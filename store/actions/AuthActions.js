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
	console.log(user);
	return {
			type: LOGIN_USER_SUCCESS,
			user: user
	};

}

//loginUser
export const loginUser = ({email, password}) => {
	console.log(email);
	console.log(password);
	return dispatch => {
		dispatch(loginStart());
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => dispatch(loginUserSuccess(user)))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => dispatch(loginUserSuccess(user)))
			.catch(error => dispatch(loginUserFail(error.message)))
		});
	}
};

/*
	setTimeout(() => { 
			if(sino) {
				dispatch(loginUserSuccess("Usuario elegido"));
			} else {
				dispatch(loginUserFail("Sorry but this user cant login"));
			}
		}, 1000);
*/