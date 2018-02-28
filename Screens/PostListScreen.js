import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CardSection from '../Components/CardSection';
import PostItem from '../Components/PostItem';
import {Card, Button} from 'react-native-elements';

class PostListScreen extends Component{
	state = {
		posts: [
			{id: "A005161", author: "Finn el humano", texto: "Disorder disorder now", title: "Soy el humano"},
			{id: "A005162", author: "Jake el perro", texto: "Lookin flashes for score", title: "Soy jake el perro"},
			{id: "A005163", author: "Rick Sanchez", texto: "Eating seed is the best activity", title: "Soy rick sanches"},
			{id: "A005164", author: "Finn el humano", texto: "Disorder disorder now", title: "Soy el humano"},
			{id: "A005165", author: "Jake el perro", texto: "Lookin flashes for score", title: "Soy jake el perro"},
			{id: "A005167", author: "Rick Sanchez", texto: "Eating seed is the best activity", title: "Soy rick sanches"}
		]
	}

	viewPost = () => {
		this.props.navigation.navigate("PostDetail");
	}

	createPost = () => {
		this.props.navigation.navigate("PostEdit");
	}

	render(){
		let postList = this.state.posts.map(post => (
				<PostItem 
					key={post.id}
					click={this.viewPost}
					author={post.author}
					title={post.title}
				/>
			)
		);

		return(
			<View>
				<ScrollView>
					<Button
						onPress={this.createPost}
  						title='Create Post' />
					{postList}
				</ScrollView>
			</View>
		);
	}
}
export default PostListScreen;