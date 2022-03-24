import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(json=>setProducts(json));
    },[]);

    const addToCart = (product) =>{
        console.log(product);
    }

    return (
        <div className="container shop-wrapper">
            <div className="row">
                <div className="col-lg-9 my-3 my-lg-5 shop-container">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
                        {
                            products.map(product=> <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            ></Product>)
                        }
                    </div>
                </div>
                <div className="col-lg-3 bg-info">
                    <div className='mt-3 cart'>
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;