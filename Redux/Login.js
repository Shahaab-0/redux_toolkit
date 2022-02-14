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
    const response = await makeApiRequest().post('/login', {
      user_email_id: email,
    });
    return response.data.result;
  },
);

export const counterSlice = createSlice({
  name: 'Login',
  initialState: {
    number: '',
    loader: {},
  },
  reducers: {},
  extraReducers: {
    [getLogin.fulfilled]: (state, {payload}) => {
      console.log(payload, 'responseis here');
    },
  },
});
// export const {getNumber} = counterSlice.actions;

export default counterSlice.reducer;
