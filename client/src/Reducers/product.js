import {SHOW_PRODUCT,
    VIEW_PRODUCT,
    FILTER_SEARCH,
    SIGN_IN,
    ADD_TO_CART,
    BUY_NOW


}
from '../Actions/index';

const initialState={
    productData:[],
    selectedProduct: {},
    signIn:[],
    cartItems: [],
    buyNow:[],
    token: null,
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
                token:action.payload.token
            }
        case ADD_TO_CART:
        return{
            ...state,
            cartItems: [...state.cartItems, action.id]
        }
        case BUY_NOW:
        return{
            ...state,
            buyNow: [...state.buyNow, action.id]
        }
        default:
            return state;
    }
}