import { GET_CATEGORY,GET_ALL_PRODUCT,ADD_TOCARD } from "./Types";

export const ProductReducer=(state, action)=>{
    switch(action.type){
        case GET_CATEGORY:{
            return {
                ...state,
                categories:action.payload
            }
        }
        case GET_ALL_PRODUCT:{
            return{
                ...state,
                products:action.payload
            }
        }
        case ADD_TOCARD:{
            const {id}=action
            const {cart,products}=state
            const element=products.find((elem)=>elem.id===id)
            const newArr=[...cart,element]
            return {
                ...state,
                cart:newArr
            }
        }
        default:
            return state
    }
}