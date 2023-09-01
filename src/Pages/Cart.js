import React,{useContext} from 'react'
import { MyContext } from '../Context/My-context'
import CartItem from '../Components/Cart-item/Cart-item'

const Cart = () => {
  const {cart,deleteToCard}=useContext(MyContext)
  return (
    <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
      {
        cart.map((elem,index)=>{
          return <CartItem onClick={()=>deleteToCard(index)} children='Delete to Cart'  {...elem} />
        })
      }

    </div>
  )
}

export default Cart