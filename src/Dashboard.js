import React, { Component } from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import Line from "./Table";

import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  onInputChange = (event) => {
    console.log("Input changed!!", event.target.value);
    this.setState({ name: event.target.value });
  };

  onClickOfSearchBtn = (event) => {
    console.log("Button clicked!!");
    // Make the API call
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
            <Line />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
