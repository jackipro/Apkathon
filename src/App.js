import React, { Component } from "react";
import "./App.css";
import Home from "./component/layout/Home";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./component/Post/Post";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Post} />
        </Switch>
      </Router>
    );
  }
}
