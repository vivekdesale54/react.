import React from "react";


const Weather = ({Temperature}) => {
    let Temp;
    if (Temperature < 15) {
        Temp = "It's cold";
    } else if (Temperature >= 15 && Temperature < 25) {
        Temp = "It's nice outside";
    } else {
        Temp = "It's hot outside";
    };

    return (
        <div>
            <h1>Weather Status</h1>
            <p>{Temp}</p>
        </div>
    )
};


export default Weather;