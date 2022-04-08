import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering options
    // 1. Element variable
    // 2.ternary operator = condition? true : false
    // 3. && operator(shorthand)
    // 4. ||
    let command;
    if(cart.length === 0){
        command = <p>Please add At least One Items</p>
    }
    else if(cart.length === 1){
        command = <p>You can add more</p>
    }
    else{
        command = <p>Thanks for adding Item</p>
    }

    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>YAY! you are buying</p>}
            {cart.length == 3 && <div className='orange'><h3>Trigonal</h3>
            <p>gift nki ba?</p>
            </div>}
            {command}
            {cart.length !== 4? <p>Keep adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button>Review</button>}
        </div>
    );
};

export default Cart;