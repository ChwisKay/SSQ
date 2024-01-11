import {StyleSheet, View} from 'react-native';

export const DragShroud = () => {
  return <View style={styles.shroud}></View>;
};

const styles = StyleSheet.create({
  shroud: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
    opacity: 0.2,
    zIndex: 1000, // or any high value
  },
});
