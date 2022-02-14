// import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios';
import {logout} from '../redux/slice/Login';
import {URL} from '../Styles';
const makeApiRequest = (token, thunkAPI) => {
  // let headers = {
  //     'Authorization': Authorization,
  //     'Cookie': 'ci_session=358v4pqnoc16q29b1ljodlmrbnkvo3fv',
  //     "X-Access-Token": token,
  // }

  let Axios = axios.create({
    baseURL: URL,
  });

  // Axios.interceptors.response.use(response => {
  //     if (response.data.success == 4) {
  //         thunkAPI.dispatch(logout())
  //         clearFilter()
  //     }
  //     else {
  //         return response
  //     }
  // })

  return Axios;
};

export {makeApiRequest};
