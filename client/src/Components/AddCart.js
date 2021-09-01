import react from 'react';
//import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import ProductCard from '../SharedComponents/ProductCard/ProductCard'
import "./ShowProducts.css";


 const AddCart=()=>{

    const records=useSelector((state)=>state.product.productData)
    const cart = useSelector((state)=>state.product.cartItems);
    const cartdata = records.filter(item => cart.includes(item.id) )
    console.log(cartdata)
    return(
       <>
       <h1>User Cart Added Items</h1>
        <div className="allproducts">
             {cartdata.map(item => <ProductCard {...item}  />)}
            </div>
            </>
    )
}
export default AddCart