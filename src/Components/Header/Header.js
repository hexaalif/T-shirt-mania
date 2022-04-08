import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../customLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to T-shirt Mania</h2>
            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/review">Review</CustomLink>
                <CustomLink to="/grandpa">Grandpa</CustomLink>
                {/* <Link to='/home'>Home</Link>
                <Link to='/review'>Review</Link> */}
            </nav>
        </div>
    );
};

export default Header;