import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./Header/Header";
import Universities from "./Universities/Universities";

import Specialties from "./Specialties/Specialties";
import "./App.css";
import Chances from "./Chances/Chances";
import News from "./News/News";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main">
          <Switch>
            <Route path="/universities" component={Universities} />
            <Route path="/chances" component={Chances} />
            <Route path="/specialties" component={Specialties} />
            <Route path="/news" component={News} />
            <Redirect to="/universities" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
