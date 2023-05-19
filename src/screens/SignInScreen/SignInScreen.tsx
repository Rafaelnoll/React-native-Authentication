import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
  Text,
} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import IUser from '../../interfaces/IUser';
import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
  const [loading, setLoading] = useState(false);
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm<IUser>();

  const onSignInPressed = async (data: IUser) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(data.email, data.password);
    } catch (error) {
      Alert.alert('Oops', 'Email or password are wrong.');
    }
    setLoading(false);
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword' as never);
  };

  const onCreateAccount = () => {
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
          }}
        />
        <Text style={styles.forgotPassword} onPress={onForgotPassword}>
          Forgot password?
        </Text>

        <CustomButton
          text="Sign in"
          loading={loading}
          onPress={handleSubmit(onSignInPressed)}
        />

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
    width: '100%',
    maxWidth: 300,
    maxHeight: 300,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    fontSize: 14,
    color: 'gray',
  },
});

export default SignInScreen;
