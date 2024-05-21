import axios from 'axios'
import { getToken } from './auth';

const service = axios.create({
    baseURL: "http://43.138.100.3:8081/",
    timeout:5000,
})
service.interceptors.request.use(
    config =>{
        // console.log("进入了 request config")
        // console.log(getToken())
        if(getToken()){
            config.headers['token'] = getToken()
            // console.log('进入了gettoken')
            // console.log(getToken())
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)


service.interceptors.response.use(

    response => {
        return response;
    },

    error => {
        console.log('err' + error) // for debug
        return error
    }

)

export default service
