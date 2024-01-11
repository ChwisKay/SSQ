import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Menubutton from './MenuButton';
import Title from './Title';
import Date from './CurrentDate';
import Time from './CurrentTime';

const Titlebar = () => {
  return (
    <View style={styles.titlebar}>
      <Title />
      <View style={styles.dateTime}>
        <Date />
        <Time />
      </View>
      <Menubutton />
    </View>
  );
};

const styles = StyleSheet.create({
  titlebar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#7785fcb3',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'red',
  },

  dateTime: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Titlebar;
