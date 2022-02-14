import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ProfileScreen = () => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
