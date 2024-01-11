import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({text, onPress}) => {
  text = 'Menu';
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 3,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Button;
