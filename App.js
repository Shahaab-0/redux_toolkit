import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import SolidButton from './Components/Components/SolidButton';
import MyStack from './navigation/MainRoutes';
import {store} from './Redux/Store';
import {Color} from './Styles';

const App = ({navigation}) => {
  return (
    //store is the combination of multiple reducers
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
