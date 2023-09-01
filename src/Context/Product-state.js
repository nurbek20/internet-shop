import {GET_CATEGORY,GET_ALL_PRODUCT,ADD_TOCARD,DELETE_TO_CARD} from "./Types"
import { MyContext } from "./My-context"
import { useReducer } from "react"
import { ProductReducer } from "./Product-reducer"


export const ProductState=({children})=>{
    const initialSate={
        categories:[],
        products:[],
        cart:[]
    }
    const [state,dispatch]=useReducer(ProductReducer,initialSate)
    const getCategoryState=(data)=>{
        dispatch({type:GET_CATEGORY, payload:data})
    }
    const getAllProduct=(data)=>{
        dispatch({type:GET_ALL_PRODUCT, payload:data})
    }
    const addToCard=(id)=>dispatch({type:ADD_TOCARD, id})
    const deleteToCard=(id)=>dispatch({type:DELETE_TO_CARD, id})
    return (
        <MyContext.Provider value={{
            categories:state.categories,
            products:state.products,
            cart:state.cart,
            getCategoryState,
            getAllProduct,
            addToCard,
            deleteToCard
        }} >
            {children}
        </MyContext.Provider>
    )
}