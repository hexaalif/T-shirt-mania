import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext);
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <p><small>Gift: {ring}</small></p>
            <p>house no.{house}</p>
            <button onClick={() => setHouse(house + 1)}>buy a house</button>
        </div>
    );
};

export default Special;