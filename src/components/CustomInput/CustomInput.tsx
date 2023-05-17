/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Controller, Control, RegisterOptions} from 'react-hook-form';
import {View, TextInput, StyleSheet, Text} from 'react-native';

interface CustomInputProps {
  control: Control<any>;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  rules?: RegisterOptions;
}

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry = false,
  rules = {},
}: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={styles.errorText}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
  errorText: {
    color: 'red',
    alignSelf: 'stretch',
  },
});

export default CustomInput;
