import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {userRegister} from '../../Redux/Login';
import {Color} from '../../Styles';
import SolidButton from '../Components/SolidButton';
import Spinner from '../Components/Spinnder';

const RegisterScreen = ({navigation}) => {
  const {
    container,
    input,
    validationText,
    textHead,
    button,
    buttonMargin,
    textDark,
    textLight,
    row,
  } = styles;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  // let data = new FormData();
  // data.append('user_first_name', firstName);
  // data.append('user_last_name', lastName);
  // data.append('user_email_id', email);
  // data.append('user_phone_number', number);
  // data.append('user_source', 'android');
  let data = {
    user_first_name: firstName,
    user_last_name: lastName,
    user_email_id: email,
    user_phone_number: number,
    user_source: 'android',
    navigation: navigation,
  };
  const dispatch = useDispatch();
  const {registerResponse, loadingToggle} = useSelector(state => state.login);
  // console.log(registerResponse, 'register response in screen');
  return (
    <View style={[container]}>
      {loadingToggle ? <Spinner /> : null}
      <Text style={[textHead]}>Sign Up</Text>

      <View>
        <View>
          <TextInput
            autoFocus={true}
            placeholderTextColor={Color.mediumGrey}
            style={[input]}
            placeholder="First Name"
            value={firstName}
            onChangeText={firstName => {
              // this.firstNameCheck(firstName.trim());
              setFirstName(firstName.trim());
            }}
          />
          {/* {this.state.firstName === false ? (
            <Text style={validationText}>Please enter valid first name</Text>
          ) : null} */}
        </View>

        <View>
          <TextInput
            placeholderTextColor={Color.mediumGrey}
            style={[input]}
            placeholder="Last Name"
            value={lastName}
            onChangeText={lastName => {
              // this.lastNameCheck(lastName.trim());
              setLastName(lastName.trim());
            }}
          />
          {/* {this.state.lastName === false ? (
            <Text style={validationText}>Please enter valid last name</Text>
          ) : null} */}
        </View>

        <View>
          <TextInput
            placeholderTextColor={Color.mediumGrey}
            style={[input]}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={email => {
              // this.emailCheck(email.trim());
              setEmail(email.trim());
            }}
          />
          {/* {this.state.email === false ? (
            <Text style={validationText}>Please enter valid email id</Text>
          ) : null} */}
        </View>

        <View>
          <TextInput
            placeholderTextColor={Color.mediumGrey}
            maxLength={11}
            style={[input, {backgroundColor: Color.lightGrey}]}
            placeholder="Mobile Number"
            keyboardType={'number-pad'}
            value={number}
            onChangeText={number => {
              // this.numberCheck(number.trim());
              setNumber(number.trim());
            }}
          />
          {/* {this.state.number === false ? (
            <Text style={validationText}>Please enter valid number</Text>
          ) : null} */}
        </View>

        <View style={buttonMargin}>
          <SolidButton
            // onPress={() => {
            //   navigation.navigate('VerifyPhone');
            // }}
            buttonLabel="Sign up"
            buttonColor="green"
            onPress={() => {
              dispatch(userRegister(data));
              // this.firstNameCheck(firstName);
              // this.lastNameCheck(lastName);
              // this.emailCheck(email);
              // this.numberCheck();
              // this.apiCheck();
            }}
          />
        </View>
        <View style={row}>
          <Text style={[textLight]}>Already have a account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            activeOpacity={0.7}>
            <Text style={[textDark]}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  validationText: {
    color: Color.mediumRed,
    marginLeft: 24,
    marginTop: 6,
  },
  textHead: {
    color: Color.darkGrey,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonMargin: {
    marginTop: 36,
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
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  textLight: {
    color: '#37251C70',
    fontSize: 14,
    paddingTop: 12,
    paddingBottom: 12,
    marginRight: 8,
  },
  textDark: {
    color: Color.darkGreen,
    fontSize: 14,
    paddingVertical: 12,
  },
});

export default RegisterScreen;
