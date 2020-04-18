import React, { Component } from "react";

export default class Heading extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 border border-primary">
              <div className="row">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
