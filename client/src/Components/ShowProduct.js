import React from 'react';
import {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import ProductCard from '../SharedComponents/ProductCard/ProductCard'
import {requestGetProduct,requestFilterSearch} from '../userThunk'
import "./ShowProducts.css";

const ShowProduct = () => {
    const dispatch=useDispatch();
    const records = useSelector((state)=>state.product.productData);
    const token = useSelector((state)=>state.product.token);
    const cart = useSelector((state)=>state.product.cartItems);
       let history=useHistory();
    
    const [error,setError]=useState(" ")

    const [state,setState]=useState({
        limit:"",
        category:"",
        sort:"",
    })
    const {limit,category,sort}=state;


    const handleAddFilter=(e)=>{
        let {name,value}=e.target;
        setState({...state,[name]:value})
    }
    console.log(records);
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(!limit && !category && !sort){
            setError("Fill All the Value First");
        }
        else{
            dispatch(requestFilterSearch(state));
            setError("");
    }
}
    useEffect(()=>{
        dispatch(requestGetProduct())
    },[dispatch]);
    
const handleLoginLogout = () => {
    if (token) {
        localStorage.removeItem('token');
        dispatch({
            type: "SIGN_OUT"
        });
    } else {
        history.push('/login');
    }
}

    return (
        <div>
            
            {error && <h3>{error}</h3>}
            <button onClick={() =>{history.push("/");}}>Home</button><br></br>
            <button onClick={() =>{history.push("/AddCart");}}>CheckOut Page</button>
            <button onClick={handleLoginLogout}>{token ? "Logout" : "Login"}</button>
            <h2>Filter User Choice</h2>
            <form onSubmit={handleSubmit}>
            <label for="Limit">Limit :</label>
            <input type="text" id="limit" name="limit" value={limit} onChange={handleAddFilter}/>
            <label for="category">Category :</label>
            <input type="text" id="category" name="category" value={category} onChange={handleAddFilter}/>
            <label for="sort">Choose a Sorting :</label>
            <select id="cars" name="cars" onChange={(e) => {
                setState({...state, sort: e.target.value})}}>
            <option value="">Select sort </option>
            <option value="asc">Ascending </option>
            <option value="desc">Descending </option>
            </select>
            <input type="submit" value="Submit"/>
            </form>
        <div className="allproducts">
            {records.map(item => <ProductCard {...item}  />)}
        </div>
        
        </div>
    )
}
export default ShowProduct