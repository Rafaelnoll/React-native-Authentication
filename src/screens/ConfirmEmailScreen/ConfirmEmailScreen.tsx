import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const onConfirmCode = () => {
    console.warn('Confirm code');
  };

  const onSignInPressed = () => {
    console.warn('onSignInPressed');
  };

  const onResendPressed = () => {
    console.warn('onResendPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmCode} />

        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="secondary"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
