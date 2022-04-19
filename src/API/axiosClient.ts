import axios from "axios"
import queryString from "query-string"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers:{
        'content-type': 'application/json',
    },
    paramsSerializer : params => queryString.stringify(params)
})

axiosClient.interceptors.response.use((response)=>{
    //Do something before receive data from API
    if(response && response.data){
        return response.data
    }
},(err)=> {throw err})

export default axiosClient;