import react from 'react';
import {useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
import ProductCard from '../SharedComponents/ProductCard/ProductCard'
import "./ShowProducts.css";


 const AddCart=()=>{
   let history=useHistory();

    const records=useSelector((state)=>state.product.productData)
    const cart = useSelector((state)=>state.product.cartItems);
    const cartdata = records.filter(item => cart.includes(item.id) )

    const handleLogout=()=>{
      localStorage.removeItem("token"); 
      history.push("/login")
  }

    return(
       <>
       <h1>User Cart Added Items</h1>
       <button onClick={handleLogout}>Logout</button><br /><br />
        <div className="allproducts">
             {cartdata.map(item => <ProductCard {...item} isButtonsRequiredCart={false}  />)}
            </div>
            </>
    )
}
export default AddCart