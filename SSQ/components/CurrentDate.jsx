// react component to get and display the current date

import React, {useState} from 'react'; //! new
import {StyleSheet, Text, View} from 'react-native';

const [date, setDate] = useState(getdate()); //! new

const getdate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return day + '/' + month + '/' + year;
};

const CurrentDate = () => {
  return (
    <View style={styles.date}>
      <Text style={styles.datetext}>{getdate()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    flex: 2,
    textAlign: 'center',
  },
  datetext: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    textShadowColor: 'black',
    fontFamily: 'sans-serif',
  },
});
export default CurrentDate;
