import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Main } from "./pages";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
