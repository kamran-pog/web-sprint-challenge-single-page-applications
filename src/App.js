import React from "react";
import {Link, Route} from 'react-router-dom'
import Home from './components/Home'
import Pizza from './components/pizza'
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
          <nav id='navLinks'>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order</Link>
            <Link to='/contact'>Contact</Link>                        
      </nav>
      </header>
      <div>
            <Route exact path='/' component={Home}/>
            <Route path='/pizza' component={Pizza}/>
            <Route path='/contact' component={Contact}/>
      </div>
    </>
  );
};
export default App;
