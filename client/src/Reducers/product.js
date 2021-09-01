import {SHOW_PRODUCT,
    VIEW_PRODUCT,
    FILTER_SEARCH,
    SIGN_IN,
    ADD_TO_CART,


}
from '../Actions/index';

const initialState={
    productData:[],
    selectedProduct: {},
    signIn:[],
    cartItems: []
}

export default function product(state=initialState,action){
    switch(action.type){
        case SHOW_PRODUCT:
            
            return{
                ...state,
                productData:action.payload
            }
        case VIEW_PRODUCT:
            return{
                ...state,
                selectedProduct: action.payload
            }
        case FILTER_SEARCH:
            return{
                ...state,
                productData:action.payload
            }
        case SIGN_IN:
            return{
                ...state,
                signIn:action.payload
            }
        case ADD_TO_CART:
        return{
            ...state,
            cartItems: [...state.cartItems, action.id]
        }

        default:
            return state;
    }
}