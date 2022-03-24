import React from 'react';

const Cart = () => {
    return (
        <div className='text-start'>
            <div className="row my-3">
                <div className="col text-center">
                    <h4>Order Details</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Selected Items: </p>
                    <p>Total Price: </p>
                    <p>Total Shipping Charge: </p>
                    <p>Tax: </p>
                    <h5>Grand Total: </h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;