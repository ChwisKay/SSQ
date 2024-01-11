import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';

const Menubutton = () => {
  return (
    <View style={styles.menubutton}>
      <Button title="Menu" />
    </View>
  );
};
const styles = StyleSheet.create({
  menubutton: {
    flex: 1,
    backgroundColor: '#7784fc0',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'red',
  },
});
export default Menubutton;
