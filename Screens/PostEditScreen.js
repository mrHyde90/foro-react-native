import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Input from '../Components/Input';
import {Card, Button} from 'react-native-elements';
import CardSection from '../Components/CardSection';
import Textarea from '../Components/Textarea';

class PostEditScreen extends Component{
	state = {
		controls: {
			title: {
				config: {
					placeholder: "title"
				},
				value: "",
				label: "Title"
			},
			texto: {
				config: {
					multiline: true,
					numberOfLines: 4,
					placeholder: "texto"
				},
				value: "",
				label: "Texto"
			}
		},
		categories: []
	}
	//solamente el state puede estar fuera del renderizado
	

	userHandler = () => {
		const formData = {};
        for (let formElementIdentifier in this.state.controls) {
            formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
        }
        formData["categories"] = this.state.categories;
        console.log(formData);

	}

	onTitleHandler = (text) => {
		const updateForm = {
			...this.state.controls
		}

		const updateFormElement = {
			...updateForm["title"]
		}

		updateFormElement.value = text;
		updateForm["title"] = updateFormElement;
		this.setState({controls: updateForm});
	}

	onTextoHandler = (text) => {
		const updateForm = {
			...this.state.controls
		}

		const updateFormElement = {
			...updateForm["texto"]
		}

		updateFormElement.value = text;
		updateForm["texto"] = updateFormElement;
		this.setState({controls: updateForm});
	}

	onAddCategory = (text) => {
		let stateCategories = this.state.categories;
		if(stateCategories.includes(text)){
			stateCategories.splice(stateCategories.indexOf(text), 1);
		} else {
			stateCategories.push(text);
		}
		this.setState({categories: stateCategories});
		console.log(this.state.categories);
	}

	render(){
		const categoriasTengo = ["Tecnologia", "Amor", "Ninguna", "Terror", "Cultura", "Deportes", "Novedades"];
		const listCategory = categoriasTengo.map((categoryItem, index) => (
			<Button
				key={index}
				buttonStyle = {this.state.categories.includes(categoryItem)? {backgroundColor: 'blue'} : {backgroundColor: 'red'}}
				onPress={() => this.onAddCategory(categoryItem)}
				title={categoryItem} />
		));
		///
		console.log(this.state.categories.includes("Tecnologia"));
		return(
			<ScrollView>
				<Card title="Create Post">
					<CardSection>
						<Input 
							label={this.state.controls["title"].label}
							value={this.state.controls["title"].value}
							config={this.state.controls["title"].config}
							onChangeText={this.onTitleHandler}/>
					</CardSection>

					<CardSection>
						<Textarea
							label={this.state.controls["texto"].label}
							value={this.state.controls["texto"].value}
							config={this.state.controls["texto"].config}
							onChangeText={this.onTextoHandler}/>
					</CardSection>

						<Card title="Choose categories">
							{listCategory}
						</Card>
						<Button
							onPress={this.userHandler}
	  						title='Create Post' />
				</Card>
			</ScrollView>
		);
	}
}

export default PostEditScreen;