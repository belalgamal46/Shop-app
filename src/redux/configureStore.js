import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeSlice';
import detailsReducer from './detailsSlice';

const store = configureStore({
  reducer: {
    homeReducer,
    detailsReducer,
  },
});

export default store;
