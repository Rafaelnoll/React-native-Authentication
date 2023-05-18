/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const onSignOutPressed = () => {
    auth().signOut();
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
      <Text
        onPress={onSignOutPressed}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}>
        Sign Out
      </Text>
    </View>
  );
};

export default HomeScreen;
