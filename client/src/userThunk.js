import axios from 'axios';
import {product } from './Actions/allActions'

const request=axios.create({
    baseURL:"https://fakestoreapi.com"
});

export const requestGetProduct = () => {
    return async(dispatch)=>{
    try{
    const fetchProduct=await request.get('/products');
    dispatch(product(fetchProduct.data));
    }catch(err){
        console.log(err)
    }
   }
}

