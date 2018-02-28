import React from 'react';
import {View, Text} from 'react-native';
import {Card, Button} from 'react-native-elements';

const PostItem = (props) => {
	return(
		<Card
			title={props.title}
		>
			<Text style={{marginBottom: 10}}>{props.author}</Text>
			<Button
				onPress={props.click}
			    backgroundColor='#03A9F4'
			    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
			    title='See the post' />
		</Card>
	);
}

export default PostItem;