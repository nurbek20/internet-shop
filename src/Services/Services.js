import axios from 'axios'

axios.defaults.baseURL='https://dummyjson.com'


//?Данные Категория
const getCategories=()=>{
    return axios.get('/products/categories')
}

//? Продукты
const allPorducts=()=>{
    return axios.get("/products")
}

export const services={
    getCategories,
    allPorducts
}