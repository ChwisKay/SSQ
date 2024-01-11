import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import DropContainer from './DropContainer';
import {tasks} from '../tasks';

const Worktable = () => {
  const sortTasks = containerID => {
    return tasks.filter(task => task.containerID === containerID);
  };
  if (!tasks || tasks.length === 0) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }
  return (
    <View style={styles.worktable}>
      <View style={styles.sortingarea}>
        <DropContainer
          backgroundColor="#6af06a "
          text="GREEN"
          containerID="green"
          tasks={sortTasks('green')}
        />
        <DropContainer
          backgroundColor="#f5f591"
          text="YELLOW"
          containerID="yellow"
          tasks={sortTasks('yellow')}
        />
        <DropContainer
          backgroundColor="#f1bf60"
          text="ORANGE"
          containerID="orange"
          tasks={sortTasks('orange')}
        />
      </View>
      <View style={styles.toolboxes}>
        <DropContainer
          backgroundColor="#b8b8b8"
          text="SUGGESTIONS"
          containerID="recent"
          tasks={sortTasks('recent')}
        />
        <DropContainer
          backgroundColor="#57d431"
          text="DONE!"
          containerID="done"
          tasks={sortTasks('done')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  worktable: {
    flex: 7,
    zIndex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  toolboxes: {
    flex: 3,
    zIndex: 1,
    flexDirection: 'column',
    backgroundColor: '#14a7eb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  sortingarea: {
    flex: 6,
    width: '100%',
    zIndex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
});
export default Worktable;
