import {useState, useEffect} from "react"


const CounterEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Value incremented ${count}`
    }, [count]);

    return(
        <section>
            <h2>count: {count}</h2>
                <button onClick={() => setCount(count + 1)}>IncrementVal</button>
        </section>
    );
};


export default CounterEffect;