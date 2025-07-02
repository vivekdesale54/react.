import React from "react";
import { Data3 } from "../App";


const UserContext = () => {
    return(
   < Data3.Consumer>
        {(naming) => {
            return <h1>My namer is Vivek and age: {naming}</h1>
        }}
   </Data3.Consumer>
    )
}

export default UserContext;