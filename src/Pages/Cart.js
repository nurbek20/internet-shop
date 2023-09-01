import React,{useContext} from 'react'
import { MyContext } from '../Context/My-context'
import CartItem from '../Components/Cart-item/Cart-item'

const Cart = () => {
  const {cart}=useContext(MyContext)
  return (
    <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
      {
        cart.map((elem,index)=>{
          return <CartItem children='Delete to Cart'  {...elem} />
        })
      }

    </div>
  )
}

export default Cart