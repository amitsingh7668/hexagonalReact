import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import {NameForm} from '../src/ui/components/login/login';
import {Board} from '../src/ui/components/dashboard/dashboardComponent';
import { BrowserRouter } from 'react-router-dom';
import {Createuser} from "../src/ui/components/login/useregister"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className = "container">
          <Switch>
            <Route exact path = '/doc' component={Board}/>
            <Route exact path = '/create' component={Createuser}/>
            <Route from = '*' component={NameForm}/>
          </Switch>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
