import React from 'react';

const Conformation = (props) => {
    <h2>Congratulations! Your order for a {props.size} pizza with {props.toppings.map((el) => {el.name})} pizza has been placed!</h2>
}

export default Conformation;