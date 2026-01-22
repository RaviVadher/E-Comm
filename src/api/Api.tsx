import axios from "axios";

const BaseURL = "https://dummyjson.com/products";

const apiClient = axios.create({
     baseURL:BaseURL,

});

const getProd = (url , config = {} )=>{

    const res = apiClient.get(url,config);
    return res.data;
}

export {getProd};