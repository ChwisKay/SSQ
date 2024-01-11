import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {GestureDetector} from 'react-native-gesture-handler';
import {dragAndDropGesture} from '../helpers/gestureHelper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const DraggableTask = ({task}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const gestureActive = useSharedValue(false);
  let animatedStyle = useAnimatedStyle(() => {
    return {
      ...styles.draggableTask,
      ...(gestureActive.value ? styles.activeGestureStyle : {}),
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
      ...styles.activeGestureTextStyle,
      ...(gestureActive.value ? styles.activeGestureTextStyle : {}),
    };
  });
  if (task) {
    return (
      <GestureDetector
        gesture={dragAndDropGesture(
          translateX,
          translateY,
          gestureActive,
          task,
        )}>
        <Animated.View style={animatedStyle}>
          <Text style={styles.taskText}>{task.title}</Text>
        </Animated.View>
      </GestureDetector>
    );
  } else {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  draggableTask: {
    height: 20,
    color: 'black',
    zIndex: 5,
    elevation: 1,
    fontSize: 10,
    fontWeight: 'normal',
    backgroundColor: '#8bd874',
    borderRadius: 7,
    borderColor: '#fff0dd',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: 2,
    padding: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  taskText: {
    flex: 1,
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
  },
  activeGestureStyle: {
    backgroundColor: '#888888',
    elevation: 1000,
    shadowColor: '#000',
    zIndex: 1000,
    fontWeight: 'bold',
  },
  activeGestureTextStyle: {
    fontWeight: 'bold',
  },
});

export default DraggableTask;
