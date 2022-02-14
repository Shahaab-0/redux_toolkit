import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from './Login';

export const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});
