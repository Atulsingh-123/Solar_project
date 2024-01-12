import React from 'react';

const Header = ({ handleMenuClick }) => {
    return (
        <header>
            <h1>GALO ENERGY NEWS</h1>
            <nav>
                <span onClick={() => handleMenuClick('latestPosts')}>Latest Posts</span>
                <span onClick={() => handleMenuClick('tags')}>Tags</span>
                <span onClick={() => handleMenuClick('aboutUs')}>About Us</span>
            </nav>
        </header>
    );
};

export default Header;