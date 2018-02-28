import React from 'react';
import { TextInput, View, Text, StyleSheet} from 'react-native';
import CardSection from './CardSection';

const Input = ({label, value, onChange, config}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return(
    <CardSection>
      <View style={containerStyle} >
        <Text style={labelStyle} >{label}</Text>
        <TextInput
          {...config}
          autoCorrect={false}
          value={value}
          onChange = {onChange}
          style = {inputStyle}
        />
      </View>
    </CardSection>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    flex: 2,
    fontSize: 18,
    lineHeight: 23
  },
  labelStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Input;