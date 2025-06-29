import {useState, useEffect } from "react";

const Fetchdata = () => {
    const [date, setdate] = useState([]);

    useEffect(() => {
        async function getdate() {
        const responvise = await fetch("https://jsonplaceholder.typicode.com/posts")
        const date = await responvise.json();
        if(date && date.length) setdate(date);

        
}
    getdate();
});

    return(
        <div>
            <ul>
                {date.map(item =>(
                    <section key={item.id}>
                        <h3>{item.title}</h3>
                        <h3>--body {item.body}</h3>
                    </section>
                ))}
            </ul>
        </div>
    )


};


export default Fetchdata;