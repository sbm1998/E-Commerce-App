import React from 'react';
import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from "react-router-dom"
import ProductCard from '../SharedComponents/ProductCard/ProductCard'
import {requestGetProductDetails} from '../userThunk'
import { useHistory } from 'react-router-dom';
import "./ShowProducts.css";

const ProductDetails = () => {
    const {productId}=useParams();
    const dispatch=useDispatch();
    const records = useSelector((state)=>state.product.selectedProduct);
    const { image, title, price, category, description } = records;
    let history=useHistory();
    
    useEffect(()=>{
        dispatch(requestGetProductDetails(productId))
    },[dispatch]);

   
    console.log(records);
    return (
        <div>
           <button onClick={() =>{history.push("/show");}}>Home</button>
          <center>
          {Object.keys(records).length === 0 ? (
            <div>...Loading</div>
          ) : (
            
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title"><b>Title:</b>{title}</h5>
            <h4 className="card-price">Price :{price}</h4>
            <p><b>Category :</b>{category}</p>
            <p><b>Description :</b>{description}</p>
            </div>
          </div>
          )}
          <button type="button" class="btn btn-secondary">BuyNow</button><br></br> <br></br>
          <button type="button" class="btn btn-secondary">Add To Cart</button>
          </center>
        </div>
      );

   
}
export default ProductDetails