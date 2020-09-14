import React from 'react';

const Pizza = () => {
    return (
        <div>
            <h1>Order your pizza!!!</h1>
            <form>
                <label htmlFor='name'>
                    Name
                    <input name='name'></input>
                </label><br></br>

                <label htmlFor='size'>
                    Size
                    <select name='size'>
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
                    <input type='checkbox' name='mushrooms'></input>
                </label>

                <label htmlFor='olives'>
                    Olives
                    <input type='checkbox' name='olives'></input>
                </label>

                <label htmlFor='peppers'>
                    Peppers
                    <input type='checkbox' name='peppers'></input>
                </label>

                <label htmlFor='onions'>
                    Onions
                    <input type='checkbox' name='onions'></input>
                </label><br></br>

                <label htmlFor='instructions'>
                    Special instructions
                    <input type='textarea' name='instructions'></input>
                </label>

                <button name='submit'>Order</button>

            </form>
        </div>
    );
};

export default Pizza;