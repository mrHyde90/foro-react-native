import Expo from 'expo';
import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import AuthScreen from './Screens/AuthScreen';
import PostListScreen from './Screens/PostListScreen';
import PostDetailScreen from './Screens/PostDetailScreen';
import PostEditScreen from './Screens/PostEditScreen';

export default class App extends React.Component {

  render() {

    const PostNavigator = StackNavigator({
      PostList: {screen: PostListScreen},
      PostDetail: {screen: PostDetailScreen},
      PostEdit: {screen: PostEditScreen}
    }, {
      lazy: true,
      headerMode: "none"
    }); 

    const MainNavigator = TabNavigator({
      auth: {screen: AuthScreen},
      Post: {screen: PostNavigator}
    });

    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
