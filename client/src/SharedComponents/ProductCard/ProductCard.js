import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const { title, price, image, id } = props;
    return (
    <div className="card" style={{width: "18rem"}}>
    <Link to={`/product/${id}`}>
    <img className="card-img-top" src={image} alt="Card image cap" />
    <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h4 className="card-price">{price}</h4>
    </div>
    </Link>
  </div>)
}

export default ProductCard;