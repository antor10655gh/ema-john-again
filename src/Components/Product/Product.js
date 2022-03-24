import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {id, name, price, ratings, img, seller} = props.product;
    return (
        <div className="col product-container">
            <div className="card h-100">
            <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name.slice(0,20)}</h5>
                    <p className="card-text">Price: $ {price}</p>
                    <p className="card-text">Manufacturer: {seller}</p>
                    <p className="card-text">Rating: {ratings} stars</p>
                </div>
                <button className='btn btn-info'>
                    <span>Add To Cart</span>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;