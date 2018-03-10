import Expo from 'expo';
import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './store/reducers'; 

import AuthScreen from './Screens/AuthScreen';
import PostListScreen from './Screens/PostListScreen';
import PostDetailScreen from './Screens/PostDetailScreen';
import PostEditScreen from './Screens/PostEditScreen';

export default class App extends React.Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDW5xw0dw7l81njYuHUjWtWzi_g0mhKOFo",
      authDomain: "foro-d1373.firebaseapp.com",
      databaseURL: "https://foro-d1373.firebaseio.com",
      projectId: "foro-d1373",
      storageBucket: "foro-d1373.appspot.com",
      messagingSenderId: "243322805160"
    };
    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

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

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
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
