import React, { createContext,useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './grandpa.css'
/**
 * // context api
 *  1. call createContext with a default value;
 * 2. set a variable of the context with uppercase
 * 3. make sure you export the context to use it in other places
 * 4. wrap your child content using RingContext.provider
 * 5. provide a value
 * 6. to consume the context from child component
 * 7. useContext hook and you will need to pass the contextNames
 */

export const RingContext = createContext('diamond')

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'Diamond Ring';

    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
        <section className='grandpa'>
            <h2>Grandpa</h2>
            
            <p>House: {house} <button onClick={handleBuyAHouse}>Buy a House</button></p>
            <section style={{display: 'flex'}}>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
        </section>
        </RingContext.Provider>)
};

export default Grandpa;