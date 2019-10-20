import React from 'react';
import './App.css';
//import { Route, Link } from "react-router-dom";
import { Route, BrowserRouter, Switch }from "react-router-dom"
import Cabs from "./components/cabs/index";
import Hotels from "./components/hotels/index";
import Landing from "./components/homepage/index";

function App() {
  return (
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/hotelsPage' component={Hotels} />
              <Route exact path='/cabsPage' component={Cabs} />
              <Route render={() => <h3>No Match</h3>} />
            </Switch>
        </div>
      </BrowserRouter>

    
  );
}

export default App;
