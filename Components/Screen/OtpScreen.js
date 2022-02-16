import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setOtp} from '../../Redux/Login';
import {Color} from '../../Styles';

const OtpScreen = () => {
  const {container, input} = styles;
  const {otp} = useSelector(state => state.login);
  const dispatch = useDispatch();
  //   alert(otp);
  return (
    <View style={container}>
      <TextInput
        placeholderTextColor={'#b4b7b8'}
        maxLength={6}
        style={[input]}
        placeholder="Email or Phone Number"
        keyboardType="email-address"
        value={otp}
        onChangeText={otp => {
          dispatch(setOtp(otp));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: Color.lightGrey,
    marginBottom: 0,
    paddingTop: 14,
    // paddingBottom: 14,
    paddingLeft: 24,
    height: 50,
    borderRadius: 25,
    fontSize: 14,
    lineHeight: 16,
    color: Color.darkGrey,
  },
});

export default OtpScreen;
