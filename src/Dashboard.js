import React, { Component } from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import Line from "./Table";

import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onClickOfSearchBtn = (e) => {
    console.log("Button clicked!!");
    // Make the API call
  }

  render() {
    console.log("state", this.state);
    return (
      <React.Fragment>
        <div>
          <Navigation />
        </div>
        <div className="container-fluid mt-20">
          <div>
            <Search onClickOfSearchBtn={this.onClickOfSearchBtn} />
          </div>

          <div>
            <Line />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
