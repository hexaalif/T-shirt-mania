import React from 'react';
import './tshirt.css'

const Tshirts = ({handleAddtoCart, tshirt}) => {
    // const {handleAddtoCart, tshirt} = props;
    const {name, picture, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddtoCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default Tshirts;