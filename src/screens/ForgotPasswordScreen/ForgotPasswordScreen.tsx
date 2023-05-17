import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

interface IForgotPasswordScreen {
  email: string;
}

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm<IForgotPasswordScreen>();

  const onSendPressed = () => {
    navigation.navigate('NewPassword' as never);
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn' as never);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset you password</Text>

        <CustomInput
          placeholder="Enter your email"
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
          }}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

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

export default ForgotPasswordScreen;
