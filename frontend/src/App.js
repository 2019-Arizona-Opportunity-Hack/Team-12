import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Cabs from "./components/cabs/index";
import Hotels from "./components/hotels/index";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/cabsPage">Go to cabs page</Link>
        </li>
        <li>
          <Link to="/hotelsPage">Go to hotels page</Link>
        </li>
      </ul>
      <Route exact path="/cabsPage" component={Cabs}/>
      <Route exact path="/hotelsPage" component={Hotels}/>
    </div>
  );
}

export default App;
