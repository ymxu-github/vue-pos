import axios from 'axios';
import { Message } from 'element-ui';

axios.interceptors.request.use((config)=>{
    return config;
}, (err)=>{
    Message.error({ message: err });
})

axios.interceptors.response.use((success)=>{
    return success.data;
}, (err)=>{
    if (err.response) {
        console.log(err.response);
    } else {
        Message.error({ message: err })
    }
})

export const getOftenGoods = (params)=>{
    return axios({
        url: 'https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods',
        method: 'get',
        data: params
    })
}

export const getTypeGoods = (params)=>{
    return axios({
        url: 'https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods',
        method: 'get',
        data: params
    })
}