import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';

const store = configureStore({
  reducer: {
    homeReducer,
  }
});

export default store;