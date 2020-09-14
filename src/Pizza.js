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

    const submitOrder = (e) => {
        e.preventDefault();

        axios
            .post(`https://reqres.in/api/users`, order)
            .then(res => {
                console.log('res:', res)
                setPizzaOrder([
                    ...pizzaOrder,
                        res.data
                ])})
            .catch(err =>  console.log('err:', err))

    };

    console.log('order:', order);
    console.log('pizza order:', pizzaOrder)
    

    return (
        <div>
            <h2>Build your own pizza:</h2>
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

                {errors.name.length > 0 ? <p>{errors.name}</p> : null}

                <label htmlFor='size'>
                    Size
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

                <button name='submit' id='submit'>Order</button>

            </form>
        </div>
    );
};

export default Pizza;