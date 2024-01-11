import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import appData from '../app.json';

const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.titletext}>{appData.displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 3,
    textAlign: 'center',
  },
  titletext: {
    color: 'white',
    fontSize: 38,
    fontWeight: '800',
    textShadowColor: 'black',
    fontFamily: 'sans-serif',
  },
});

export default Title;
