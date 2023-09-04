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
const getCategoryProduct=(product)=>{
    console.log("category>>", product)
    return axios.get(`/products/category/${product}`)
}

export const services={
    getCategories,
    allPorducts,
    getCategoryProduct
}