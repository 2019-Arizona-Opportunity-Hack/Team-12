import React from 'react';
import './App.css';
//import { Route, Link } from "react-router-dom";
import { Route, BrowserRouter, Switch }from "react-router-dom"
import Cabs from "./components/cabs/index";
import Hotels from "./components/hotels/index";
import Landing from "./components/homepage/index";

function App() {
  return (
    <div id="main">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/cabsPage">Ride Donors</Link>
        </li>
        <li className="nav-item">
          <Link to="/hotelsPage">Roof Donors</Link>
        </li>
        <li className="nav-item">
            <Link to="/homepage">Request a Service</Link>
        </li>
      </ul>
      <Route exact path="/cabsPage" component={Cabs}/>
      <Route exact path="/hotelsPage" component={Hotels}/>
      <Route exact path="/homepage" component={Landing}/>
    </div>
  );
}

export default App;
