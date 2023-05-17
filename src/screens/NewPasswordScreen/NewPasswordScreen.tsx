import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import INewPasswordForm from '../../interfaces/INewPasswordForm';

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm<INewPasswordForm>();

  const onSubmitPressed = () => {
    navigation.navigate('SignIn' as never);
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn' as never);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset you password</Text>

        <CustomInput
          placeholder="Enter your code"
          name="code"
          control={control}
          rules={{
            required: 'Code is required',
          }}
        />

        <CustomInput
          placeholder="Enter your new password"
          control={control}
          name="new_password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters long',
            },
          }}
          secureTextEntry
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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

export default NewPasswordScreen;
