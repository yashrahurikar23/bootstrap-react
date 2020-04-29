import React, { Component } from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import Table from "./Table";

import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      users: []
    };
  }

  onInputChange = (event) => {
    console.log("Input changed!!", event.target.value);
    this.setState({ name: event.target.value });
  };

  onClickOfSearchBtn = (event) => {
    // Make the API call
    console.log("Name in button", this.state.name);

    axios
      .get("http://www.mocky.io/v2/5ea99559340000980d3f0506", {
        params: { name: this.state.name, department: this.state.department }
      })
      .then((response) => {
        this.setState({ users: response.data.users });
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    console.log("state", this.state);
    return (
      <React.Fragment>
        <div>
          <Navigation />
        </div>
        <div className="container-fluid mt-20">
          <div>
            <Search
              onClickOfSearchBtn={this.onClickOfSearchBtn}
              onInputChange={this.onInputChange}
              name={this.state.name}
            />
          </div>

          <div>
            <Table users={this.state.users} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
