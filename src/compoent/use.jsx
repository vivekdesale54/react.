import { useState, useEffect } from "react";


const Effect = () => {
    const [val, setval] = useState(0)

    useEffect(() => {
        console.log('call Useeffect');
        document.title = `Increment ${val}`;
       }, [val] )
    return (
        <div>
            <h2>{val}</h2>
        <button onClick={() => setval(val + 1)}>Increment</button>
        </div>

    )
};


export default Effect;