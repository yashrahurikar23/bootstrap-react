import React, { Component } from "react";

import { fetchUser } from "./api";

import Heading from "./Heading";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ibu: "",
      department: "",
      tableData: [],
    };
  }

  onInputChange = (event) => {
    // console.log("Event name", event.target.name);
    // console.log("Event value", event.target.value);
    
    this.setState({ ...this.state, [event.target.name] : event.target.value });
  };

  onButtonClick = () => {
    console.log("Clicked!!");

    // callback function
    const successfulReceived = (response) => {
      console.log("List of users", response);
      this.setState({ ...this.state, tableData: response });
    };

    fetchUser(this.state.name, this.state.ibu, successfulReceived);

    // Promise based syntax
    // .then(response => {
    //   console.log("Fetch user", response);
    //   const userName = `${response.name.title} ${response.name.first}  ${response.name.last}`;
    //   this.setState({ ...this.state, name: userName });
    // })
    // .catch(error => {
    //   console.log("Fetch error", error);
    // })
  };

  render() {
    console.log("State", this.state);
    return (
      <div>
        <div className="container">
          <Heading name={this.state.name} />

          <div className="col-lg-12 border border-secondary rounded-sm pt-3">
            <div className="row">
              <div className="col-lg-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.onInputChange}
                ></input>
              </div>

              <div className="col-lg-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="IBU"
                  name="ibu"
                  onChange={this.onInputChange}
                ></input>
              </div>

              <div className="col-lg-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Band"
                ></input>
              </div>

              <div className="col-lg-2">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search.."
                ></input>
              </div>

              <div className="col-lg-2">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={this.onButtonClick}
                >
                  Fetch User
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="row">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">IBU</th>
                    <th scope="col">Band</th>
                    <th scope="col">Department</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Search</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.tableData.map((row, index) => (
                    <React.Fragment key={row.id}>
                      <tr className="border border-secondary rounded-sm">
                        <th scope="row">{row.id}</th>
                        <td>{row.name}</td>
                        <td>{row.username}</td>
                        <td>{row.website}</td>
                        <td>{row.address.street}</td>
                        <td>{row.name}</td>
                        <td>Search</td>
                        <td className="d-flex flex-column">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm m-1"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm m-1"
                          >
                            Save
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
