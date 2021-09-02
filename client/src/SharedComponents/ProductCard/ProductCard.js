import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {addToCart,buyProduct} from '../../Actions/allActions'
import { useHistory } from 'react-router-dom';


const ProductCard = (props) => {
    const { title, price, image, id } = props;
    const dispatch=useDispatch();
    let history=useHistory();
    return (
    <div className="card" style={{width: "18rem"}}>
    <Link to={`/product/${id}`}>
    <img className="card-img-top" src={image} alt="Card image cap" />
    <div className="card-body">
    <h5 className="card-title"><b>Title :</b>{title}</h5>
    <h4 className="card-price"><b>Price :</b>{price}</h4>
    </div>
    </Link>
    <button type="button" class="btn btn-secondary" onClick={() => {dispatch(buyProduct(id))
    history.push("/buy");
    }}>BuyNow</button><br></br>
    <button type="button" class="btn btn-secondary" onClick={() => dispatch(addToCart(id))}>Add To Cart</button>
  </div>)
}

export default ProductCard;