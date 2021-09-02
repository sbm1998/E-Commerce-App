import axios from 'axios';
import {product,
    viewProduct,
    filterSearch,
    signIn
} from './Actions/allActions'

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

export const requestGetProductDetails = (id) => {
    return async(dispatch)=>{
    try{
    const fetchProduct=await request.get(`/products/${id}`);
    dispatch(viewProduct(fetchProduct.data));
    }catch(err){
        console.log(err)
    }
   }
}

export const requestFilterSearch = (state) => {
    return async(dispatch)=>{
    try{
        const {limit,category,sort}=state;
        const url = category && category !== "" ? `/products/category/${category}?limit=${limit}&sort=${sort}` : `/products?limit=${limit}&sort=${sort}`
    const fetchProduct=await request.get(url);
    dispatch(filterSearch(fetchProduct.data));
    }catch(err){
        console.log(err)
    }
   }
}

export const requestUserSignIn = (logindata) => {
    return async(dispatch)=>{
    try{
    const signInData=await request.post('/auth/login', logindata);
   
    dispatch(signIn(signInData.data));
  } catch (error) {
    console.log(error);
  }
   }
}
