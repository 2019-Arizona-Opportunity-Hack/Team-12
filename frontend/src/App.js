import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Cabs from "./components/cabs/index";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/cabsPage">Go to cabs page</Link>
        </li>
      </ul>
      <Route exact path="/cabsPage" component={Cabs}/>
    </div>
  );
}

export default App;
