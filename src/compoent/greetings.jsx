import React from "react";

const Greetings = () => {
    const TimeofDay = new Date().getTime();
    const greeting = () => {
        if(TimeofDay < 12){
            return "Good Morning";
        }else{
            return "Good Evening";
        }
    }
    return (
        <div>
            <h1>Greetings</h1>
            <p>{greeting()}</p>
        </div>
    )
}

export default Greetings;