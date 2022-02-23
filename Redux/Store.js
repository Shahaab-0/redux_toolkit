import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from './Login';

export const store = configureStore({
  //we can add multiple reducers inside configureStore and send this store to app js
  reducer: {
    //loginReducer is one of the reducers
    login: LoginReducer,
  },
});
