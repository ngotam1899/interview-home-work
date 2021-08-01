//Nơi chứa các hàm gọi API riêng biệt cho từng module
//Module Product
import axiosService from '../../utils/AxiosService';
import {API_ENDPOINT} from '../../constants/index';
import queryString from 'query-string';


const url = '/posts';
// https://jsonplaceholder.typicode.com/posts  METHOD = GET
export const getAllBlog = (params = {}) =>{
    let queryParams = '';
    if(Object.keys(params).length>0){
        queryParams = `?${queryString.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
};

// https://jsonplaceholder.typicode.com/posts/1  METHOD = GET
export const getBlog = (id) =>{
    return axiosService.get(`${API_ENDPOINT}${url}/${id}`);
};

// https://jsonplaceholder.typicode.com/posts/1/comments  METHOD = GET
export const getCommentsByBlog = (id) =>{
    return axiosService.get(`${API_ENDPOINT}${url}/${id}/comments`);
};
