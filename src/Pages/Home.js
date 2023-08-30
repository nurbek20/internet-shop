import React,{useEffect,useContext} from 'react'
import CartItem from '../Components/Cart-item/Cart-item'
import { services } from '../Services/Services'
import { MyContext } from '../Context/My-context'

const Home = () => {
  const {getAllProduct,products}=useContext(MyContext)
  useEffect(()=>{
    const data=async()=>{
      const product=await services.allPorducts()
      getAllProduct(product.data.products)
    }
    data()
  },[])
  console.log("product>>>",products)
  return (
    <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
      {
        products.map((product,index)=>{
          return  <CartItem key={index} {...product} />
        })
      }
     
    </div>
  )
}

export default Home