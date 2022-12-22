import reactDomTestUtilsProductionMin from "react-dom/cjs/react-dom-test-utils.production.min";
import React from 'react';
import {Link, Route} from 'react-router-dom'

const Home = () => {
    return (
        <div class='body'>
            <h2>Welcome to Lambda Pizza</h2>
            <h2>Let us make you your perfect pizza!</h2>
            <Link to='/pizza'>Order</Link>
        </div>
    )};

export default Home;