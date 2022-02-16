import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {makeApiRequest} from '../Common/MakeApiCall';
import {URL} from '../Styles';

// export const getLogin = createAsyncThunk(
//   'Login/getLogin',
//   async (email, thunkAPI) => {
//     var data = new FormData();
//     data.append('user_email_id', email);
//     console.log(data, 'email is here');
//     const response = await axios({
//       method: 'POST',
//       url: URL + '/login',
//       data: {user_email_id: email},
//     });
//     console.log(response.data.result, '>>>>>>>>>>>>>>>>');
//     return response.data.result;
//   },
// );

export const getLogin = createAsyncThunk(
  'Login/getLogin',
  async (email, thunkAPI) => {
    const response = await makeApiRequest(email).post('/login');
    return response.data.result;
  },
);

export const userRegister = createAsyncThunk(
  'Login/userRegister',
  async (data, thunkAPI) => {
    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'multipart/form-data');

    // var formdata = new FormData();
    // formdata.append('res_id', '2');
    // formdata.append('user_id', '2');
    // formdata.append('token', 'VneVseNYRyj0tauOr2Ac');
    // formdata.append('user_latitude', '123');
    // formdata.append('user_longitude', '243');
    // formdata.append('user_first_name', 'asdf');
    // formdata.append('user_last_name', 'sfadasdf');
    // formdata.append('user_email_id', 'asdf@gasdf.com');
    // formdata.append('user_phone_number', '98985647361');
    // formdata.append('user_source', 'android');

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: 'follow',
    // };

    // fetch(
    //   'https://dev.dotminds.in/selectable-backend-app/api/user/register',
    //   requestOptions,
    // )
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // let data = new FormData();
    // data.append('user_first_name', 'firstName');
    // data.append('user_last_name', 'lastName');
    // data.append('user_email_id', 'email');
    // data.append('user_phone_number', 'number');
    // data.append('user_source', 'android');
    // console.log(data, 'data');
    // let data = {
    //   user_first_name: 'firstName',
    //   user_last_name: 'lastName',
    //   user_email_id: 'wqer@g.com',
    //   user_phone_number: 98199523458,
    //   user_source: 'android',
    // };
    const response = await makeApiRequest().post('/register', data);
    console.log(response.data.result[0].otp);
    if (response.data.success) {
      data.navigation.navigate('OtpScreen');
      return response.data.result[0].otp;
    } else {
      alert(response.data.result);
    }
    // const response = await axios.post;
    // console.log(response.data.result, 'response is here?');
  },
);

export const counterSlice = createSlice({
  name: 'Login',
  initialState: {
    number: '',
    loader: {},
    otp: '',
  },
  reducers: {
    setOtp: (state, {payload}) => {
      state.otp = payload;
    },
  },
  extraReducers: {
    [getLogin.fulfilled]: (state, {payload}) => {
      state.otp = payload;
      // console.log(payload, 'responseis here');
    },
    [userRegister.fulfilled]: (state, {payload}) => {
      state.otp = payload;
    },
  },
});
export const {setOtp} = counterSlice.actions;

export default counterSlice.reducer;
