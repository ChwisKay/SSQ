import React from 'react';
import Titlebar from './components/Titlebar';
import Worktable from './components/Worktable';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {store} from './helpers/redux/store';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.app}>
          <Titlebar />
          <Worktable />
        </View>
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
export default App;
