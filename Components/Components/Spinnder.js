import React, {Component} from 'react';
import {
  View,
  Image,
  Modal,
  StatusBar,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Color} from '../../Styles';

const Spinner = () => {
  // componentDidMount() {
  //   setTimeout(() => {
  //     console.log('Spinner Timer');
  //   }, 1000);
  // }
  if (Platform.OS === 'ios') {
    return (
      <Modal animationType="none" transparent visible>
        <View style={styles.overlayViewStyle}>
          <View style={styles.loaderViewStyle}>
            <ActivityIndicator size="large" color={Color.headerText} />
            <Text style={styles.loaderTextStyle}>Loading..</Text>
          </View>
        </View>
      </Modal>
    );
  } else {
    return (
      <Modal animationType="none" transparent visible>
        <View style={styles.overlayViewStyle}>
          <View style={styles.loaderViewStyle}>
            <ActivityIndicator size="large" color={Color.headerText} />
            {/* <Image
                source={require('../../assets/spinner/loader-transparent.gif')}
                style={{height: 100, width: 100}}
              /> */}
            <Text style={styles.loaderTextStyle}>Loading..</Text>
          </View>
        </View>
      </Modal>
    );
  }
};

const styles = {
  loaderViewStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayViewStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
  },
  // loaderViewStyle: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderRadius: 5,
  //   shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 5,

  // },
  loaderStyle: {
    marginVertical: 22,
    marginLeft: 30,
    marginRight: 10,
  },
  loaderTextStyle: {
    fontWeight: '400',
    // marginRight: 30,
    fontSize: 18,
    marginTop: 15,
    color: Color.headerText,
    // fontFamily: 'overpass-heavy',
    // color: '#3E4095',
    // alignSelf: 'center',
    // backgroundColor: 'grey',
  },
  ViewBGColor: {
    backgroundColor: '#FFFFFF',
  },
};

export default Spinner;
