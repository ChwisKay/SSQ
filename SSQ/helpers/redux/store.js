import {configureStore} from '@reduxjs/toolkit';
import taksReducer from './features/taskSlice';
export const store = configureStore({
  tasks: taksReducer,
});
