import React,{useEffect} from 'react'
import { services } from '../../Services/Services'

const Nav = () => {
  useEffect(()=>{
    const data=async()=>{
      const result=await services.getCategories()
      console.log("reuslt>>>", result)
    }
    data()
  },[])
  return (
    <div>Nav</div>
  )
}

export default Nav