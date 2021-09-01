import {SHOW_PRODUCT,
    VIEW_PRODUCT,
    FILTER_SEARCH,
    SIGN_IN,
    ADD_TO_CART

}
from './index';

export const product=(payload)=>({
    type:SHOW_PRODUCT,
    payload,
})

export const viewProduct=(payload)=>({
    type:VIEW_PRODUCT,
    payload,
})

export const filterSearch=(payload)=>({
    type:FILTER_SEARCH,
    payload,
})

export const signIn=(payload)=>({
    type:SIGN_IN,
    payload
})

export const addToCart=(id)=>({
    type:ADD_TO_CART,
    id
})