import React, { useState } from 'react';
import Cart from '../cart/Cart';
import useTshirts from '../hooks/useTshirts';
import Tshirts from '../Tshirt/Tshirts';
import './Home.css'

const Home = () => {
    const [tshirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);
    
    const handleAddtoCart = (selectedItem) =>{
        const exists = cart.find(tshirt =>tshirt._id === selectedItem._id)
        if(!exists){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else{
            alert('do not add repeated items')
        }
    }

    const handleRemoveFromCart= (selectedItem) => {
            const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id)
            setCart(rest)
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirts => <Tshirts
                    key={tshirts._id}
                    tshirt={tshirts}
                    handleAddtoCart={handleAddtoCart}
                    ></Tshirts>)
                }
            </div>  
            <div className="cart-container">
                <Cart 
                handleRemoveFromCart={handleRemoveFromCart}
                cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;