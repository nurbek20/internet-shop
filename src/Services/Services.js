import axios from 'axios'

axios.defaults.baseURL='https://dummyjson.com'


//?Данные Категория
const getCategories=()=>{
    return axios.get('/products/categories')
}

export const services={
    getCategories,
}