import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CurrentTime = () => {
  return (
    <View style={styles.time}>
      <Text style={styles.timetext}>{getCurrentTime()}</Text>
    </View>
  );
};

function getCurrentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return hours + ':' + minutes;
}

const styles = StyleSheet.create({
  time: {
    flex: 2,
    textAlign: 'center',
  },
  timetext: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    textShadowColor: 'black',
    fontFamily: 'sans-serif',
  },
});

export default CurrentTime;
