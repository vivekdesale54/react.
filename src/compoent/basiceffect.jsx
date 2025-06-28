import { useEffect } from "react";

const BasicEffect = () => {

    useEffect(() => {
        (console.log("whenever the component mounts (i.e. when it's rendered first time)"));

    }, [])

    return(
        <div></div>
    )
}



export default BasicEffect