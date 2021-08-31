import React from 'react';
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import ProductCard from '../SharedComponents/ProductCard/ProductCard'
import {requestGetProduct} from '../userThunk'
import "./ShowProducts.css";

const ShowProduct = () => {
    const dispatch=useDispatch();
    const records = useSelector((state)=>state.product.productData);

    useEffect(()=>{
        dispatch(requestGetProduct())
    },[dispatch]);

   
    console.log(records);
    

    return (
        <div className="allproducts">
            {records.map(item => <ProductCard {...item} />)}
        </div>
    )
}
export default ShowProduct