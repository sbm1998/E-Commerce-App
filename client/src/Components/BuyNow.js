import react from 'react';
//import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import ProductCard from '../SharedComponents/ProductCard/ProductCard'
import "./ShowProducts.css";


 const BuyNow=()=>{
   let history=useHistory();

    const records=useSelector((state)=>state.product.productData)
    const buyCart = useSelector((state)=>state.product.buyNow);
    const buydata = records.filter(item => buyCart.includes(item.id) )

    const handleLogout=()=>{
      localStorage.removeItem("token"); 
      history.push("/login")
  }

    return(
       <>
       <h1>User Cart Added Items</h1>
       <button onClick={handleLogout}>Logout</button><br /><br />
        <div className="allproducts">
             {buydata.map(item => <ProductCard {...item} isButtonsRequiredCart={false} isButtonsRequiredBuy={false}  />)}
            </div>
            </>
    )
}
export default BuyNow
