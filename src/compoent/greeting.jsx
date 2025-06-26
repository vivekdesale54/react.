import React from "react";


const Greeting = () => {
    const name = "John";
    const date = new Date();
    return(
        <div>
            <h1>Hello React {name}</h1>
            <p style={{display: "flex", alignContent: "center", justifyContent: "center"}}>Date = {date.getDate()}</p>
        </div>
    )
}


export default Greeting;