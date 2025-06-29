import { Data, Data1} from "../App";
const ComponentA = () => {
    return(
        <Data.Consumer>
            {(name) => {
                // return <h1>{name}</h1>
            return (
                <Data1.Consumer >
                    {(age) => {
                return  <h1> 
                            Hello my name is {name} and I'm {age} year's old.
                        </h1>
                    }}
                </Data1.Consumer>
            )
            }}
        </Data.Consumer>
    );
};


export default ComponentA;