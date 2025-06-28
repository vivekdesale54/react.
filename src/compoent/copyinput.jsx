import React from 'react';
import {useState} from 'react';
import Popup from "./popup"


const CopyInput = () => {
    const [inputvalue, setinputvalue] = useState('')
    const [copied, setcopied] =  useState(false)

    const copyhandler = () => {
        navigator.clipboard.writeText(inputvalue).then(() => {
            setcopied(true)
            setTimeout(() => setcopied(false), 5000);
        });
    };


    return (
        <div>
            <input type="text"
             value={inputvalue}
             onChange={e => setinputvalue(e.target.value)} />
            <button onClick={copyhandler}>Copy</button>
            <Popup copied={copied} />
        </div>
    )
}


export default CopyInput;