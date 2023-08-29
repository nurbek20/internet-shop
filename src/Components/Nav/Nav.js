import React,{useEffect,useContext} from 'react'
import { services } from '../../Services/Services'
import { MyContext } from '../../Context/My-context'

const Nav = () => {
  const {getCategoryState,categories}=useContext(MyContext)
  useEffect(()=>{
    const data=async()=>{
      const result=await services.getCategories()
      getCategoryState(result.data)
    }
    data()
  },[])
  return (
    <div className='nav-menu'>
      <h3>Category Product</h3>
      <ol>
        {
          categories.map((elem,index)=>{
            return <li key={index} >  {elem}</li>
          })
        }
      </ol>
    </div>
  )
}

export default Nav