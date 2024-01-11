import {createSlice} from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    draggedTask: null,
    tasks: [],
  },
  reducers: {
    setDraggedTask: (state, action) => {
      state.activeTask = action.payload;
    },
    resetDraggedTask: state => {
      state.activeTask = null;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const {id, ...task} = action.payload;
      const index = state.tasks.findIndex(task => task.id === id);
      state.tasks[index] = {...state.tasks[index], ...task};
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload);
      state.tasks.splice(index, 1);
    },
  },
});

export const {
  setDraggedTask,
  resetDraggedTask,
  setTasks,
  addTask,
  updateTask,
  deleteTask,
} = taskSlice.actions;
export default taskSlice.reducer;
