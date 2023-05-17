import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import IUser from '../../interfaces/IUser';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm<IUser>();

  const onSignInPressed = (data: IUser) => {
    console.log(data);
    // validade user

    navigation.navigate('Home' as never);
  };

  const onForgotPassword = () => {
    console.warn('OnForgotPassword');
    navigation.navigate('ForgotPassword' as never);
  };

  const onCreateAccount = () => {
    console.warn('onCreateAccount');
    navigation.navigate('SignUp' as never);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Email"
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
          }}
        />

        <CustomInput
          placeholder="Password"
          secureTextEntry
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'The password should be minimun 6 characters long',
            },
          }}
        />

        <CustomButton text="Sign in" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPassword}
          type="tertiary"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onCreateAccount}
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
