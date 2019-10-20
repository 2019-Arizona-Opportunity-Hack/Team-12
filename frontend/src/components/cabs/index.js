import React from "react";
import WebsocketHandler from '../websocketCabs';
function App(){
    return (
        <div>
            <WebsocketHandler room='Cabs'/>
        </div>
    )
}

export default App;