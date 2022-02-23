import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {makeApiRequest} from '../Common/MakeApiCall';
import {URL} from '../Styles';

export const getLogin = createAsyncThunk(
  //Slice name/function name
  'Login/getLogin',
  async (data, thunkAPI) => {
    //makeApiRequest is a common function to call api
    const response = await makeApiRequest()
      .post('/login', data)
      .catch(error => {
        console.log(error);
      });
    if (response.data.message == 'User is successfully logged in') {
      data.navigation.navigate('OtpScreen');
      //returned value will be payload in below function
      return {otp: response.data.result[0].otp};
    } else {
    }
  },
);

export const userRegister = createAsyncThunk(
  'Login/userRegister',
  async (data, thunkAPI) => {
    console.log(data);
    const response = await makeApiRequest().post('/register', data);
    if (response.data.success) {
      data.navigation.navigate('OtpScreen');

      return {otp: response.data.result[0].otp};
    } else {
      alert(response.data.message);
    }
  },
);

export const verifyOtp = createAsyncThunk(
  'Login/verifyOtp',
  async (data, thunkAPI) => {
    const response = await makeApiRequest().post('/validate', data);
    console.log(response);
    if (response.data.success) {
      data.navigation.navigate('ProfileScreen');
    } else {
      alert(response.data.message);
    }
  },
);

export const counterSlice = createSlice({
  //name of this slice has to be unique and is used to call its variables in component
  name: 'Login',
  initialState: {
    number: '',
    loader: {},
    otp: '',
    loadingToggle: false,
  },
  reducers: {
    //state update function without api call can be called here
    setOtp: (state, {payload}) => {
      state.otp = payload;
    },
    setLoadingToggle: (state, {payload}) => {
      state.loadingToggle = payload;
    },
  },
  extraReducers: {
    
    //.fullfilled runs when the api call is successful
    [getLogin.fulfilled]: (state, {payload}) => {
      //getLogin is the name of function defined above
      //payload is the data returned from the above getLogin function
      state.otp = payload.otp;
      state.loadingToggle = false;
    },
    //.rejected runs when the api call has an error
    [getLogin.rejected]: (state, {payload}) => {
      state.loadingToggle = false;
    },
    //.pending runs when the api is being called
    [getLogin.pending]: (state, {payload}) => {
      state.loadingToggle = true;
    },

    [userRegister.fulfilled]: (state, {payload}) => {
      state.otp = payload;
      state.loadingToggle = false;
    },
    [userRegister.pending]: (state, {payload}) => {
      state.loadingToggle = true;
    },
    [userRegister.rejected]: (state, {payload}) => {
      state.loadingToggle = false;
    },
    [verifyOtp.fulfilled]: (state, {payload}) => {
      state.loadingToggle = false;
    },
    [verifyOtp.pending]: (state, {payload}) => {
      state.loadingToggle = true;
    },
    [verifyOtp.rejected]: (state, {payload}) => {
      state.loadingToggle = false;
    },
  },
});
export const {setOtp} = counterSlice.actions;

export default counterSlice.reducer;
