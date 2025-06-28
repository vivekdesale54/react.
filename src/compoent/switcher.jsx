import { useState } from 'react'


const Switch = () => {
    const [sw, setSw] = useState(false);

    return(
        <div>
             {sw ? <span>Dark</span> : <span>Light</span>}

             <br /> 
             <input type="text" key={sw ? "dark" : "light"} />
             <button onClick={() => setSw((sw) => !sw)}>Switch</button>
        </div>
    )
}


export default Switch;