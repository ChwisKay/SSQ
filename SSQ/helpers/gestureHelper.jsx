import {Gesture} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export const dragAndDropGesture = (
  translateX,
  translateY,
  gestureActive,
  task,
) => {
  const tapGesture = Gesture.Tap().onEnd(() => {
    if (!gestureActive.value) {
      console.log(`tapped ${task.title}`);
    }
  });

  const dragGesture = Gesture.Pan().onUpdate(event => {
    translateX.value = event.translationX;
    translateY.value = event.translationY;

    gestureActive.value = true;
  });

  const dropGesture = Gesture.Pan().onEnd(() => {
    translateX.value = withSpring(0);
    translateY.value = withSpring(0, {}, () => {
      gestureActive.value = false;
    });
  });

  return Gesture.Simultaneous(tapGesture, dragGesture, dropGesture);
};

export const dropGesture = (category, task) => {
  const gesture = Gesture.Pan().onEnd(() => {
    if (category && task) console.log(`dropping ${task} in ${category} `);
  });
  return gesture;
};
