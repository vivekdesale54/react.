import React from 'react';


const UserStatus = (props) => {
   
   if(props.IsLoggedIn && props.IsAdmin ){
    return <h1>Welcome Admin</h1>
   } else {
    return <h1>Welcome User</h1>
   }
}

export default UserStatus;