import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { services } from '../../Services/Services'

const Products = () => {
  const {product}=useParams()
  
  useEffect(()=>{
    const data=async()=>{
      const result=await services.getCategoryProduct(product)
      console.log("result",result)
    }
    data()
  },[product])
  return (
    <div>Products</div>
  )
}

export default Products