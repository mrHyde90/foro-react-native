import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const Textarea = ({label, value, onChangeText, config}) => {
	const {inputStyle, labelStyle, containerStyle, containerFila} = styles;
	return(<View style={containerStyle}>
			<Text style={labelStyle} >{label}</Text>
			<View style={containerFila}>
                <TextInput
                  {...config}
                  autoCorrect={false}
                  value={value}
                  onChangeText = {onChangeText}
                  style = {inputStyle}
                />
              </View>
		</View>);
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    flex: 1,
    fontSize: 18,
    lineHeight: 23
  },
  labelStyle: {
    flex: 1,
    fontSize: 18
  },
  containerFila: {
    flexDirection: 'row',
    flex: 7,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  containerStyle: {
    height: 200,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
});


export default Textarea;