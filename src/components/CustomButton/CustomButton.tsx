import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

interface CustomInputProps {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'tertiary';
  bgColor?: string;
  fgColor?: string;
  loading?: boolean;
}

const CustomInput = ({
  onPress,
  text,
  type = 'primary',
  bgColor,
  fgColor,
  loading = false,
}: CustomInputProps) => {
  return (
    <Pressable
      disabled={loading}
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {loading ? 'Loading...' : text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: '#3B71F3',
  },
  container_secondary: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },
  container_tertiary: {},
  text: {
    fontWeight: 'bold',
  },
  text_primary: {
    color: '#FFF',
  },
  text_secondary: {
    color: '#3B71F3',
  },
  text_tertiary: {
    color: 'gray',
  },
});

export default CustomInput;
