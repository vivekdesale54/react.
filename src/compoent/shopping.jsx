import React from "react";
import { useState } from "react";

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const[name, setName] = useState('');
    const [quantity, setquantity] = useState('');

   const submitHandler = e => {
        e.preventDefault();


        if(!name || !quantity) return;

        const newItem = {
            name, quantity: parseInt(quantity)
    };

    setItems((preItems) => [...preItems, newItem])
    setName(" ");
    setquantity('');

   }


    return (
        <div>
            <h1>SHopping List</h1>
           <form onSubmit={submitHandler}>
            <input type="text" 
            placeholder="Item Name"
            value={name} 
            onChange={e => setName(e.target.value)}/>
             <input type="number" 
            placeholder="Quantity"
            value={quantity} 
            onChange={e => setquantity(e.target.value)}/>
           
           <button type="submit">Add Item</button>
           </form>


           <ul>
            {items.map((item, index) => (
            <li key={index}>
                {item.name} - Quantity: {item.quantity}
            </li>
           ))}
           </ul>
        </div>
    )
}

export default ShoppingList;