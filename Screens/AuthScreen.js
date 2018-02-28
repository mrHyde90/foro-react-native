import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CardSection from '../Components/CardSection';
import {Card} from 'react-native-elements';
import Input from '../Components/Input';
//pon el password de manera clasica
//pasita a pasito suave suavecito
class AuthScreen extends Component {

	state = {
		controls: {
			"username": {
				config: {
					placeholder: "username"
				},
				value: "",
				label: "Username"
			},
			"password": {
				config: {
					placeholder: "password",
					secureTextEntry: true
				},
				value: "",
				label: "Password",
			},
			"email": {
				config: {
					placeholder: "email"
				},
				value: "",
				label: "Email"
			}
		}
	}

	onUsernameChange = (event) => {
		const updateForm = {
			...this.state.controls
		}
		const updateFormElement = {
			...updateForm["username"]
		}
		updateFormElement.value = event.nativeEvent.value;
		updateForm["username"] = updateFormElement;
		this.setState({controls: updateForm});
	}

	onPasswordChange = (event) => {
		const updateForm = {
			...this.state.controls
		}
		const updateFormElement = {
			...updateForm["password"]
		}
		updateFormElement.value = event.nativeEvent.value;
		updateForm["password"] = updateFormElement;
		this.setState({controls: updateForm});
	}

	onEmailChange = (event) => {
		const updateForm = {
			...this.state.controls
		}
		const updateFormElement = {
			...updateForm["email"]
		}
		updateFormElement.value = event.nativeEvent.value;
		updateForm["email"] = updateFormElement;
		this.setState({controls: updateForm});
	}

	render() {
		return(
			<Card title="Create User">

					<Input 
						label={this.state.controls["username"].label}
						value={this.state.controls["username"].value}
						config={this.state.controls["username"].config}
						onChange={(event) => this.onUsernameChange(event)}/>
				
					<Input 
						label={this.state.controls["password"].label}
						value={this.state.controls["password"].value}
						config={this.state.controls["password"].config}
						onChange={(event) => this.onPasswordChange(event)}/>
				
					<Input 
						label={this.state.controls["email"].label}
						value={this.state.controls["email"].value}
						config={this.state.controls["email"].config}
						onChange={(event) => this.onEmailChange(event)}/>
				
			</Card>
		);
	}
}

export default AuthScreen;