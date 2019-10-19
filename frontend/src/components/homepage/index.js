import React from "react";
import ServiceOption from './ServiceOption';
import RequestForm from './RequestForm';

const App = () => {
    return (
        <div>
            <h1>Request a service</h1>
            <ServiceOption />
            <RequestForm />
        </div>
    )
}

export default App;
