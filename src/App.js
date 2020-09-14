import React from "react";
import {Link, Route} from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Let us make you your perfect π!</p>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>

          <Route exact path='/' component={Home}/>
          <Route path='/pizza' component={Pizza}/>
    </>
  );
};
export default App;
