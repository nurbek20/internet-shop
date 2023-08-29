import { GET_CATEGORY } from "./Types";

export const ProductReducer=(state, action)=>{
    switch(action.type){
        case GET_CATEGORY:{
            return {
                ...state,
                categories:action.payload
            }
        }
        default:
            return state
    }
}