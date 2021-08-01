//Nơi chứa các hàm gọi API riêng biệt cho từng module
//Module Product
import axiosService from '../../utils/AxiosService';
import {API_ENDPOINT} from '../../constants/index';

// https://jsonplaceholder.typicode.com/posts  METHOD = GET
const url = '/posts';

export const getAllBlog = () =>{
    
    return axiosService.get(`${API_ENDPOINT}${url}`);
};

// https://jsonplaceholder.typicode.com/posts/1/comments  METHOD = GET
export const getCommentsByBlog = (id) =>{
    return axiosService.get(`${API_ENDPOINT}${url}/${id}/comments`);
};
