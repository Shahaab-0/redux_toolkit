import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {getLogin} from '../../Redux/Login';
import {Color} from '../../Styles';
import SolidButton from '../Components/SolidButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmtail] = useState('');
  console.log(email, 'email');
  const [emailValidation, setEmailValidation] = useState(true);
  const {
    container,
    input,
    validationText,
    textHead,
    inputContainer,
    textDark,
    signUpContainer,
    row,
    textLight,
  } = styles;
  const emailCheck = email => {
    var re =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    if (re.test(email) === false) {
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
    }
  };
  const {number, loginResponse} = useSelector(state => state.login);
  const dispatch = useDispatch();
  console.log(loginResponse, 'login response in component');

  return (
    <View style={container}>
      <View>
        <Text style={[textHead]}>Log in</Text>
      </View>
      <View style={inputContainer}>
        <TextInput
          placeholderTextColor={'#b4b7b8'}
          maxLength={isNaN(email) ? null : 10}
          style={[
            input,
            emailValidation === false
              ? {backgroundColor: Color.lightRed}
              : {backgroundColor: Color.lightGrey},
          ]}
          placeholder="Email or Phone Number"
          keyboardType="email-address"
          value={email}
          onChangeText={email => {
            emailCheck(email.trim());
            setEmtail(email.trim());
          }}
        />
        {emailValidation === false ? (
          <Text style={validationText}>
            Please enter valid Email Id / Mobile Number
          </Text>
        ) : null}
      </View>
      <View>
        <SolidButton
          buttonLabel="Login"
          buttonColor="green"
          onPress={() => dispatch(getLogin(email))}
        />
      </View>
      <View style={signUpContainer}>
        <View style={row}>
          <Text style={[textLight]}>Not a member? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            activeOpacity={0.6}>
            <Text style={[textDark]}>Join now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  validationText: {
    color: Color.mediumRed,
    marginLeft: 24,
    marginTop: 6,
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
  textHead: {
    color: Color.darkGrey,
    fontSize: 24,
    marginTop: 80,
    textAlign: 'center',
    marginBottom: 56,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 24,
  },
  textDark: {
    color: Color.darkGreen,
    fontSize: 16,
    paddingVertical: 12,
  },
  signUpContainer: {
    marginTop: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: 24,
    marginTop: 12,
  },
  textLight: {
    color: '#37251C70',
    fontSize: 14,
    paddingVertical: 12,
    marginRight: 8,
  },
});

export default LoginScreen;
