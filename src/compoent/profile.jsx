import React from "react";
import { useState } from "react";


const Profile = () => {
    const[name, setName] = useState("John Doe");
    const [age, setAge] = useState(20);

    const Update = () => {
        const newName = prompt("Enter your name:");
        const newAge = prompt("Enter your age:");
        setName(newName);
        setAge(newAge);
    }


    return(
        <div>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <input type="text" value={name}/>
            <input type="text" value={age} />
            <button onClick={Update}>Updatename and age</button>
        </div>
    );
};


export default Profile;


