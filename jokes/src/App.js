import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/Home";
import Header from "./components/Header";
import Jokes from "./components/Jokes/Jokes";
import Footer from "./components/Footer";
import { getJokes } from "./actions/jokes";
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJokes());
  });

  return (
    <div className="bg">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/jokes" exact component={Jokes} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
