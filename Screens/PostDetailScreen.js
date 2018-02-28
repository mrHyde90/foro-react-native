import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, Button, ButtonGroup} from 'react-native-elements';

//{id: "A005161", author: "Finn el humano", texto: "Disorder disorder now", title: "Soy el humano"}
class PostDetailScreen extends Component{
	state = {
		selectedIndex: 0
	}

	deleteUpdate = (selectedIndex) => {
		if(selectedIndex == 0){
			this.props.navigation.navigate("PostEdit");
		} else {
			this.props.navigation.goBack();
		}
		this.setState({selectedIndex});
		console.log(selectedIndex);
	}

	render(){
		const buttons = ["Edit", "Delete"];
		const {selectedIndex} = this.state;
		return(
			<Card
				title="Soy el humano"
			>
				<Text>Finn el humano</Text>
				<Text>Disorder disorder now</Text>
				<ButtonGroup 
					selectedIndex={selectedIndex}
					onPress={this.deleteUpdate}
					buttons={buttons}
					containerStyle={{height: 30}}
				/>
			</Card>
		);
	}
}

export default PostDetailScreen;