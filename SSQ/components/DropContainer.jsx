import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import {dropGesture} from '../helpers/gestureHelper';
import DraggableTask from './DraggableTask';

const DropContainer = ({backgroundColor, text, tasks}) => {
  if (tasks || !tasks.length === 0) {
    return (
      <GestureDetector gesture={dropGesture()}>
        <View
          style={[
            styles.dropContainer,
            backgroundColor ? {backgroundColor} : {},
          ]}>
          <Text>{text}</Text>
          {tasks.map(task => (
            <DraggableTask key={task.id} task={task} />
          ))}
        </View>
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
  dropContainer: {
    flex: 1,
    zIndex: 2,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    marginVertical: 2,
    padding: 10,
  },
});

export default DropContainer;
