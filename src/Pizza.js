import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const orderSchema = yup.object().shape({
    name: yup.string().min(2, 'Name must be at least 2 characters long.'),
    size: yup.string().required('please, choose a size'),
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
        toppings: {
            mushrooms: "",
            olives: "",
            peppers: "",
            onions: ""
        },
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

    const submitOrder = (e) => {
        e.preventDefault();

        axios
            .post(`https://reqres.in/api/users`, order)
            .then(res => {
                console.log('res:', res)

                setPizzaOrder(
                <p>Congrats, {res.data.name}! Your order for a {res.data.size} has been placed!</p>
    
                )
            })
            .catch(err =>  console.log('err:', err))

    };

    console.log('order:', order);
    console.log('pizza order:', pizzaOrder)
    console.log(order.name)
    

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

                {errors.name.length > 0 ? <p>{errors.name}</p> : null}
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
                     value={order.mushrooms}
                    ></input>
                </label><br></br>

                <label htmlFor='olives'>
                    Olives
                    <input type='checkbox' 
                    name='olives'
                    id='olives'
                    class='topping'
                    onChange={changeHandler}
                    value={order.olives}
                    ></input>
                </label><br></br>

                <label htmlFor='peppers'>
                    Peppers
                    <input type='checkbox' 
                    name='peppers'
                    id='peppers'
                    onChange={changeHandler}
                    value={order.peppers}
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
                    value={order.onions}
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

            <h2>{pizzaOrder}</h2>
        </div>
    );
};

export default Pizza;