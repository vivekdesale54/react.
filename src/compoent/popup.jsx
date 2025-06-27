import React from 'react';
import { createPortal } from 'react-dom'


const Popup = ({copied}) => {
    return createPortal(
        <section>
            {copied && (
                <div style={{position: "absolute", bottom: "3rem"}}>Copied to Clipboard</div>
            )}
        </section>,
        document.querySelector("#popup")

    );
};


export default Popup;