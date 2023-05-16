import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

interface CustomInputProps {
  text: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
  bgColor?: string;
  fgColor?: string;
}

const CustomInput = ({
  onPress,
  text,
  type = 'primary',
  bgColor,
  fgColor,
}: CustomInputProps) => {
  return (
    <Pressable
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
        {text}
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
  container_secondary: {},
  text: {
    fontWeight: 'bold',
  },
  text_primary: {
    color: '#FFF',
  },
  text_secondary: {
    color: 'gray',
  },
});

export default CustomInput;
