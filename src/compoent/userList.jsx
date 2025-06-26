import React from 'react'; 


const UserList = () => {
    const users = [
        
            {id: 1, name: "Alice", age: 25},
            {id: 2, name: "Bobs", age: 34},
            {id: 3, name: "Charliee", age: 35},
]
    return(
        <div>
            {
                users.map(({id,name, age}) => (
                        <div key={id}>
                            <h1>{name}</h1>
                            <h1>{age}</h1>
                        </div>
                    )
                )
            }
        </div>
    )
}


export default UserList;