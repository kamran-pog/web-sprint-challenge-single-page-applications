import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import styled from 'styled-components';

const Error = styled.p`
    color: red;
`

const orderSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters long.'),
    size: yup.string(),
    mushrooms: yup.boolean(),
    olives: yup.boolean(),
    peppers: yup.boolean(),
    onions: yup.boolean(),
    instructions: yup.string()
});

const Pizza = () => {

    const [order, setOrder] = useState({
        name: "",
        size: "small",
        mushrooms: false,
        olives: false,
        peppers: false,
        onions: false,
        instructions: ""
        
    });

    const [errors, setErrors] = useState({
        name: "",
        size: "",
        mushrooms: "",
        olives: "",
        peppers: "",
        onions: "",
        instructions: ""
    });

    const validate = (e) => {
        yup.reach(orderSchema, e.target.name)
            .validate(e.target.type === 'checkbox' ? e.target.checked : e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    };

    const changeHandler = (e) => {
        e.persist()
        validate(e)
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setOrder({
            ...order, [e.target.name]: value
        });
    };

    const [pizzaOrder, setPizzaOrder] = useState([]);
    const [toppings, setToppings] = useState([]);

    const submitOrder = (e) => {
        e.preventDefault();

        axios
            .post(`https://reqres.in/api/users`, order)
            .then(res => {
                console.log('res:', res)

             setPizzaOrder(
                 ...pizzaOrder,
                 res.data
             )

            })
            .catch(err =>  console.log('err:', err))

            setOrder({
                name: "",
                size: "",
                mushrooms: "",
                olives: "",
                peppers: "",
                onions: "",
                instructions: ""
            });

    };

    console.log('order:', order);
    console.log('pizza order:', pizzaOrder)
    console.log(order.name)
    console.log(toppings)
    

    return (
        <div class='body'>
            <h2>Build your own pizza:</h2>
            <form onSubmit={submitOrder}>
            <h3>What is your name?</h3>
                <label htmlFor='name'>
                    Name
                    <input 
                    name='name'
                    id='name'
                    onChange={changeHandler}
                    value={order.name}
                    ></input>
                </label><br></br>
                <hr></hr>

                {errors.name.length > 0 ? <Error>{errors.name}</Error> : null}

                <h3>What size whould you like your pizza?</h3>

                    <select  name='size'
                    id='size'
                    onChange={changeHandler}
                    value={order.size}>
                        <option
                        value='small'>
                            small
                        </option>
                        <option
                        value='medium'>
                            medium
                        </option>
                        <option
                        value='large'>
                           large
                        </option>
                        <option
                        value='ginormous'>
                            ginormous
                        </option>
                </select><br></br>
                <hr></hr>

                <h3>What toppings would you like?</h3><br></br>
                
                <label htmlFor='mushrooms'>
                    Mushrooms
                    <input type='checkbox'
                     name='mushrooms'
                     id='mushrooms'
                     class='topping'
                     onChange={changeHandler}
                     checked={order.mushrooms}
                    ></input>
                </label><br></br>

                <label htmlFor='olives'>
                    Olives
                    <input type='checkbox' 
                    name='olives'
                    id='olives'
                    class='topping'
                    onChange={changeHandler}
                    checked={order.olives}
                    ></input>
                </label><br></br>

                <label htmlFor='peppers'>
                    Peppers
                    <input type='checkbox' 
                    name='peppers'
                    id='peppers'
                    onChange={changeHandler}
                    checked={order.peppers}
                    class='topping'
                    ></input>
                </label><br></br>

                <label htmlFor='onions'>
                    Onions
                    <input type='checkbox' 
                    name='onions'
                    id='onions'
                    class='topping'
                    onChange={changeHandler}
                    checked={order.onions}
                    ></input>
                </label><br></br>
                <hr></hr>

                <h3>Any special instructions?</h3><br></br>
                    <input type='textarea' 
                    name='instructions'
                    id='instructions'
                    onChange={changeHandler}
                    value={order.instructions}
                    ></input><br></br>

            <button name='submit' id='submit'>Order</button>

            </form>
        </div>
    );
};

export default Pizza;