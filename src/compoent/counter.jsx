import React from "react";
import { useState } from "react";


const Counter = () => {
    const [count, setCount ] = useState(0);


    const changeCount = () => {
        setCount(count + 1);
    
    }
     const currentvalue = count;
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={changeCount}>Increment it</button>
            <h1>current Value: {currentvalue}</h1>
        </div>
    )
}

export default Counter;