import axios from "axios";

const Base_URL_DummyJSON_API = "https://dummyjson.com/products"


export const GetProducts = axios.create({
    baseURL: Base_URL_DummyJSON_API
})

GetProducts.interceptors.response.use((result) => result.data.products)

