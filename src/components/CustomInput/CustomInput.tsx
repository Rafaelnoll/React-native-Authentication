import React from 'react';
import {Controller, Control} from 'react-hook-form';
import {View, TextInput, StyleSheet} from 'react-native';

interface CustomInputProps {
  control: Control<any>;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry = false,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
    </View>
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
});

export default CustomInput;
