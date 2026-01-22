import axios from "axios";

const BaseURL = "https://dummyjson.com";

const apiClient = axios.create({
     baseURL:BaseURL,

});

const getProd = async ()=>{

    const res = await apiClient.get("/products");
    return res.data.products;
}

const getProdById = async (id:string)=>{
  
    console.log("checkk")
    const res = await apiClient.get(`/products/${id}`);
    console.log(res)
    return res.data;
}

export {getProd,getProdById};