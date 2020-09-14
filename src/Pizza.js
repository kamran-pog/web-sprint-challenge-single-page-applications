import React, { useState } from 'react';

const Pizza = () => {

    const [order, setOrder] = useState({
        name: "",
        size: "",
        mushrooms: false,
        olives: false,
        peppers: false,
        onions: false,
        special: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        mushrooms: "",
        olives: "",
        peppers: "",
        onions: "",
        special: ""
    });

    const changeHandler = (e) => {
        e.persist();
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setOrder({
            ...order, [e.target.name]: value
        });
    };

    const submitOrder = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Order your pizza!!!</h1>
            <form onSubmit={submitOrder}>
                <label htmlFor='name'>
                    Name
                    <input 
                    name='name'
                    id='name'
                    onChange={changeHandler}
                    value={order.name}
                    ></input>
                </label><br></br>

                <label htmlFor='size'>
                    Size
                    <select  name='size'
                    id='size'
                    onChange={changeHandler}
                    value={order.size}>
                        <option>
                            Small
                        </option>
                        <option>
                            Medium
                        </option>
                        <option>
                           Large
                        </option>
                        <option>
                            Ginormous
                        </option>
                </select><br></br>

                </label>
                
                <label htmlFor='mushrooms'>
                    Mushrooms
                    <input type='checkbox'
                     name='mushrooms'
                     id='mushrooms'
                     onChange={changeHandler}
                     value={order.mushrooms}
                    ></input>
                </label>

                <label htmlFor='olives'>
                    Olives
                    <input type='checkbox' 
                    name='olives'
                    id='olives'
                    onChange={changeHandler}
                    value={order.olives}
                    ></input>
                </label>

                <label htmlFor='peppers'>
                    Peppers
                    <input type='checkbox' 
                    name='peppers'
                    id='peppers'
                    onChange={changeHandler}
                    value={order.peppers}
                    ></input>
                </label>

                <label htmlFor='onions'>
                    Onions
                    <input type='checkbox' 
                    name='onions'
                    id='onions'
                    onChange={changeHandler}
                    value={order.onions}
                    ></input>
                </label><br></br>

                <label htmlFor='instructions'>
                    Special instructions
                    <input type='textarea' 
                    name='instructions'
                    id='instructions'
                    onChange={changeHandler}
                    value={order.instructions}
                    ></input>
                </label>

                <button name='submit'
                    class='submit'
                >Order</button>

            </form>
        </div>
    );
};

export default Pizza;