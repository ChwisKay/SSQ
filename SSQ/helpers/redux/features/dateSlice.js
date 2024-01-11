import {createSlice} from '@reduxjs/toolkit';

export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    currentDate: null,
  },
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
});
