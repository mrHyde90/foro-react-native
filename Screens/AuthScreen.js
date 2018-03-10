import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CardSection from '../Components/CardSection';
import {Card, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {loginUser} from '../store/actions'
import Input from '../Components/Input';
//pon el password de manera clasica
//pasita a pasito suave suavecito
class AuthScreen extends Component {
	componentDidUpdate() {
		console.log("adentro: " + this.props.isAuthenticated);
		if(this.props.isAuthenticated) {
  			this.props.navigation.navigate("PostList");
  		}
	}

	state = {
		controls: {
			username: {
				config: {
					placeholder: "Username"
				},
				value: "",
				label: "Username"
			},
			password: {
				config: {
					placeholder: "Password",
					secureTextEntry: true
				},
				value: "",
				label: "Password",
			},
			email: {
				config: {
					placeholder: "Email"
				},
				value: "",
				label: "Email"
			}
		}
	}

	userHandler = () => {
        const formData = {};
        for (let formElementIdentifier in this.state.controls) {
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
        }
        sino = true;
        this.props.loginUser({sino});
    }

    //checar el error aqui
    //el event.nativeEvent.value no sirve para un carajo
	inputPasswordHandler = (text) => {
		const updateForm = {
			...this.state.controls
		}
		const updateFormElement = {
			...updateForm["password"]
		}
		//console.log("Antes: " + updateFormElement.value);
		updateFormElement.value = text;
		//console.log("Despues: " + updateFormElement.value);
		updateForm["password"] = updateFormElement;
		this.setState({controls: updateForm});
	}

	inputUsernameHandler = (text) => {
		const updateForm = {
			...this.state.controls
		}
		const updateFormElement = {
			...updateForm["username"]
		}
		//console.log("Antes: " + updateFormElement.value);
		updateFormElement.value = text;
		//console.log("Despues: " + updateFormElement.value);
		updateForm["username"] = updateFormElement;
		this.setState({controls: updateForm});
	}

	inputEmailHandler = (text) => {
		const updateForm = {
			...this.state.controls
		}
		const updateFormElement = {
			...updateForm["email"]
		}
		//console.log("Antes: " + updateFormElement.value);
		updateFormElement.value = text;
		//console.log("Despues: " + updateFormElement.value);
		updateForm["email"] = updateFormElement;
		this.setState({controls: updateForm});
	}

	render() {
		let errorMessage = null;
		if(this.props.error) {
			errorMessage = <Text>{this.props.error}</Text>
		}

		let loader = <Button
						onPress={this.userHandler}
  						title='Create User' />;
  		if(this.props.loading) {
  			loader = <Text>loading</Text>
  		}

		return(
			<Card title="Create User">
					{errorMessage}
				<CardSection>
					<Input 
						label={this.state.controls["username"].label}
						value={this.state.controls["username"].value}
						config={this.state.controls["username"].config}
						onChangeText={this.inputUsernameHandler}/>
				</CardSection>

				<CardSection>
					<Input 
						label={this.state.controls["password"].label}
						value={this.state.controls["password"].value}
						config={this.state.controls["password"].config}
						onChangeText={this.inputPasswordHandler}/>
				</CardSection>

				<CardSection>
					<Input 
						label={this.state.controls["email"].label}
						value={this.state.controls["email"].value}
						config={this.state.controls["email"].config}
						onChangeText={this.inputEmailHandler}/>
				</CardSection>
				{loader}
			</Card>
		);
	}
}
///

const mapStateToProps = ({auth}) => {
	const {user, error, loading} = auth;

	return { 
		user, 
		error, 
		loading,
		isAuthenticated: user !== null
	};
};

export default connect(mapStateToProps, {loginUser})(AuthScreen);