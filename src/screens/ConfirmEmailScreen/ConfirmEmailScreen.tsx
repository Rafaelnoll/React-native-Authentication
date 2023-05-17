import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

interface IConfirmEmailScreen {
  code: string;
}

const ConfirmEmailScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm<IConfirmEmailScreen>();

  const onConfirmCode = () => {
    navigation.navigate('Home' as never);
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn' as never);
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
          name="code"
          control={control}
          rules={{
            required: 'Code is required',
          }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmCode)} />

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
