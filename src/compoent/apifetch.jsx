import {useState, useEffect} from "react";


const Apifetch = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
    async function getdata() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()
    if(data && data.length) setdata(data);
    
    }

    getdata();
    }, [])

    return(
        <div>
           
            <ul>{data.map(item => (
                 <section key={item.id}>
                <li>{item.title} </li>
                <li>body ---{item.body} </li>
                </section>
            ))}
             
            </ul>
        </div>
    )
}


export default Apifetch;