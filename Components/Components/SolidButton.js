/*
1. Developer Name(Who created the file) : Avinash Nera
2. Developer Email ID(Who created the file) : avinash@dotminds.in
3. Component Description :
4. Date Created: 13th July 2021
5. Date Modified :
6. Version number - 1.0.0
7. Previous version developer name and Email ID :
8. Previous version description :
9. Current version developer name and Email ID : Avinash Nera, avinash@dotminds.in
10. Current version description :
*/

import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Styles, {Color} from '../../Styles';

class SolidButton extends Component {
  renderButton(buttonColor, buttonLabel) {
    const {
      solidButtonViewBig,
      solidButtonTextBig,
      solidButtonView,
      solidBrownButtonView,
      solidMaroonButtonView,
      solidButtonText,
    } = styles;
    if (buttonColor == 'green') {
      return (
        <View style={[solidButtonViewBig, solidMaroonButtonView]}>
          <Text
            style={[
              solidButtonTextBig,
              // this.props.bigFont ? {fontSize: 16} : {fontSize: 14},
            ]}>
            {buttonLabel}
          </Text>
        </View>
      );
    } else if (buttonColor == 'grey') {
      return (
        <View
          style={[
            solidButtonViewBig,
            solidMaroonButtonView,
            {
              opacity: 0.7,
            },
          ]}>
          <Text style={[solidButtonTextBig]}>{buttonLabel}</Text>
        </View>
      );
    }
  }
  render() {
    const {buttonColor, buttonLabel} = this.props;
    return (
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress}>
          {this.renderButton(buttonColor, buttonLabel)}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  solidButtonViewBig: {
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 13,
    paddingHorizontal: 30,
    shadowColor: Color.mediumGreen,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4.27,

    elevation: 15,
  },
  solidButtonTextBig: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 17,
    // textTransform : 'uppercase'
  },
  solidButtonView: {
    borderRadius: 2,
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 9,
    paddingHorizontal: 17,
  },

  solidBrownButtonView: {
    backgroundColor: '#543C30',
  },
  solidMaroonButtonView: {
    backgroundColor: Color.mediumGreen,
  },

  solidButtonText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 17,
  },
};

export default SolidButton;
