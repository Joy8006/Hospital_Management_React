import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import AddSearch from "./AddSearch";
import UserLists from "./UserLists";
import HospitalLists from "./HospitalLists";
import BarChart from "./BarChart";
import "./BarChart.css";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <AddSearch />
      </div>
      <div className="alignment ">
        <BarChart />
      </div>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/user" component={UserLists} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/hospital/list" component={HospitalLists} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
