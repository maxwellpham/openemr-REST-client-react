import React, { Component } from "react";
//import { getUser, removeUserSession } from "./Utils/Common";
import { Redirect } from "react-router-dom";
import PatientList from "./components/PatientList";
import EncounterList from "./components/EncounterList";
import ComponentExample from "./components/ComponentExample";

import "./styles.css";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      //add states here
      redirectToReferrer: false
    };
  }

  handleLogout() {
    sessionStorage.removeItem("token");
    this.setState({ redirectToReferrer: true });
  }

  render() {
    /*
    //BROKEN
    if (sessionStorage.getItem("token") == null) {
      console.log("logout");
      return <Redirect to={"/"} />;
    }*/
    if (this.state.redirectToReferrer == true) {
      return <Redirect to={"/Login"} />;
    }

    return (
      <div>
        {/*=========== 
        TOP HEADER DIV 
          Dashboard for login and misc buttons
        ===========*/}
        <div className="header">
          <input
            type="button"
            onClick={this.handleLogout.bind(this)}
            value="Logout"
          />
          {/*
          <input
            type="button"
            onClick={this.handleGetAllFacilities.bind(this)}
            value="Get All Facilities"
          />

          <input
            type="button"
            onClick={this.handleGetAllPatients.bind(this)}
            value="Get All Patients"
          />
*/}
          <input
            type="button"
            //onClick={this.handleGetAllFacilities.bind(this)}
            value="Placeholder"
          />
          <p>Home page, you should see this when logged in</p>
          <h1>WORK IN PROGRESS</h1>
        </div>

        <hr></hr>
        {/*=========== 
        MIDDLE BODY DIV 
          Includes patients list and indexer "wiki-style table of contents"
        ===========*/}
        <p>Patient List</p>
        <PatientList />
        <hr></hr>
        {/*<p>Encounter List</p>
        <EncounterList />
        <hr></hr>*/}
        <p>Component Example Placeholder</p>
        <ComponentExample />
      </div>
    );
  }
}

export default Home;
