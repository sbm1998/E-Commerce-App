import {SHOW_PRODUCT,


}
from '../Actions/index';

const initialState={
    productData:[]
}

export default function product(state=initialState,action){
    switch(action.type){
        case SHOW_PRODUCT:
            return{
                ...state,
                productData:action.payload
            }
             default:
                return state;
    }
}