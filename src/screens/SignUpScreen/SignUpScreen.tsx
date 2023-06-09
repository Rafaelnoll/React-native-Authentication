import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import ISignUpForm from '../../interfaces/ISignUpForm';
import auth from '@react-native-firebase/auth';
import NativeFirebaseError from '../../interfaces/NativeFirebaseError';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {control, handleSubmit, watch} = useForm<ISignUpForm>();
  const watchPassword = watch('password');

  const onRegisterPressed = async (data: ISignUpForm) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const newUserCredential = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );
      await newUserCredential.user.sendEmailVerification();
    } catch (error) {
      const typedError = error as NativeFirebaseError;
      Alert.alert('Oops', typedError.userInfo.message);
    }
    setLoading(false);
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn' as never);
  };

  const onTermOfUse = () => {
    console.warn('onTermOfUse');
  };

  const onPrivacyPolicy = () => {
    console.warn('onPrivacyPolicy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Email"
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          placeholder="Password"
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters long',
            },
          }}
          secureTextEntry
        />
        <CustomInput
          placeholder="Password confirmation"
          control={control}
          name="password_confirmation"
          rules={{
            validate: value =>
              value === watchPassword || 'Password do not match',
          }}
          secureTextEntry
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          loading={loading}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermOfUse}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicy}>
            Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
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

export default SignUpScreen;
