import React from "react";
import {Link, Route} from 'react-router-dom';
import Home from './Home';
import Pizza from './Pizza';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
          <nav id='navLinks'>
            <Link to='/' class='links home'>Home</Link>
            <Link to='/pizza' class='links order'>Order</Link>
            <Link to='/contact' class='links contact'>Contact</Link>
          </nav>
        </header>

      <div>
        {/* <h2>Let us make you your perfect π!</h2> */}
            <Route exact path='/' component={Home}/>
            <Route path='/pizza' component={Pizza}/>
            <Route path='/contact' component={Contact}/>
        </div>
    </>
  );
};
export default App;
