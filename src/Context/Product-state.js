import {GET_CATEGORY} from "./Types"
import { MyContext } from "./My-context"
import { useReducer } from "react"
import { ProductReducer } from "./Product-reducer"


export const ProductState=({children})=>{
    const initialSate={
        categories:[]
    }
    const [state,dispatch]=useReducer(ProductReducer,initialSate)
    const getCategoryState=(data)=>{
        console.log("data>>>", data)
        dispatch({type:GET_CATEGORY, payload:data})
    }

    return (
        <MyContext.Provider value={{
            categories:state.categories,
            getCategoryState
        }} >
            {children}
        </MyContext.Provider>
    )
}