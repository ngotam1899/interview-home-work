//Nơi chứa các hàm gọi API riêng biệt cho từng module
//Module Product
import axiosService from '../../utils/AxiosService';
import {API_ENDPOINT} from '../../constants/index';

const url = '/users';
// https://jsonplaceholder.typicode.com/users  METHOD = GET
export const getAllUser = () =>{
  return axiosService.get(`${API_ENDPOINT}${url}`);
};
