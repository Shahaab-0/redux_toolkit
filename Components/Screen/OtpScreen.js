import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {setOtp, verifyOtp} from '../../Redux/Login';
import {Color} from '../../Styles';
import SolidButton from '../Components/SolidButton';
import Spinner from '../Components/Spinnder';

const OtpScreen = ({navigation}) => {
  const {container, input} = styles;
  const {otp, loadingToggle} = useSelector(state => state.login);
  const dispatch = useDispatch();
  const {
    textDark,
    textDark2,
    textLight,
    button,
    topContainer,
    textBig,
    textSmall,
    row,
  } = styles;
  //   alert(otp);
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={topContainer}>
      <View>
        {loadingToggle ? <Spinner /> : null}
        <View style={{}}>
          {/* <SafeAreaView style={{ backgroundColor: Color.background }}>
          <View style={{ backgroundColor: 'white', overflow: 'hidden', paddingBottom : 4}}>
            <BasicHeader
              noHeader
              onPress={() => {
                this.props.navigation.goBack();
              }}
              title="Verify Phone"
              icon={require('../../assets/icons/arrow-back-brown-icon/arrow-back-brown-icon.png')}
            /></View></SafeAreaView> */}
          <Text style={[textBig]}>You'll receive a code</Text>

          <Text style={[textSmall]}>
            Code is sent to{' '}
            <Text style={{}}>
              {/* {this.props.number === 0
                  ? this.props.signupNumber
                  : this.props.number} */}
              {/* {this.props.email} */}
            </Text>
          </Text>
          <View>
            <View>
              <TextInput
                placeholderTextColor={Color.mediumGrey}
                placeholder="Enter OTP"
                autoFocus={true}
                style={[input]}
                maxLength={6}
                keyboardType="number-pad"
                value={otp}
                onChangeText={number => {
                  dispatch(setOtp(number));
                }}
              />
            </View>
          </View>

          <View style={button}>
            <SolidButton
              onPress={() =>
                dispatch(
                  verifyOtp({
                    user_email_id: 'shahaab@dotminds.in',
                    otp: otp,
                    navigation: navigation,
                  }),
                )
              }
              big={true}
              // buttonLabel={
              //   loginScreen ? 'Verify and Log in' : 'Verify and Sign up'
              // }
              buttonLabel={'Verify and Log in'}
              buttonColor="green"
            />
          </View>
          <View style={row}>
            <Text style={[textLight]}>Didn't receive code? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text onPress={() => {}} style={[textDark]}>
                Request again
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.7}>
            <Text onPress={() => {}} style={[textDark2]}>
              Change email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  topContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 80,
  },
  numberRow: {},
  validationText: {
    color: Color.mediumRed,
    paddingLeft: 48,
    marginTop: 6,
  },
  textHead: {
    marginHorizontal: 115,
    fontSize: 18,
  },
  textBig: {
    color: Color.darkGrey,
    fontSize: 20,
    fontFamily: 'Lora-MediumRoman',
    textAlign: 'center',
    marginTop: 48,
  },
  textSmall: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 8,
    color: Color.buttonText,
    marginBottom: 43,
  },
  image: {
    marginLeft: 24,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 61,
    paddingBottom: 16,
    backgroundColor: Color.background,
    marginBottom: 38,
  },

  input2: {
    backgroundColor: Color.inputBack,
    marginBottom: 43,
    marginHorizontal: 24,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    backgroundColor: Color.lightGrey,
    marginBottom: 0,
    paddingTop: 18,
    // paddingBottom: 14,
    paddingLeft: 24,
    height: 50,
    borderRadius: 25,
    fontSize: 14,
    lineHeight: 16,
    color: Color.darkGrey,
    marginTop: 24,
    marginHorizontal: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textLight: {
    color: '#37251C70',
    fontSize: 14,
    marginTop: 50,
  },
  textDark: {
    color: Color.darkGreen,
    fontSize: 14,
    marginTop: 50,
    marginLeft: 6,
  },
  textDark2: {
    color: Color.darkGreen,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 36,
    marginHorizontal: 24,
  },
});

export default OtpScreen;
