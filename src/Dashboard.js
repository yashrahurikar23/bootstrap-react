import React, { Component } from "react";

import Heading from "./Heading";

import { fetchDepartments } from "./api";

import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      locations: []
    };
  }

  componentDidMount() {
    fetchDepartments()
      .then((response) => {
        this.setState({ ...this.state, departments: response.data.department });
      })
      .catch((error) => {
        console.log("Error:", error);
      })
    
    // axios.get(`http://www.mocky.io/v2/5ea2c52d4f00007a00d9f476`)
    //   .then((response) => {
    //     console.log("Response", response);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  }

  onInputChange = (event) => {
    this.setState({ ...this.state, [event.target.name] : event.target.value });
  };

  onButtonClick = () => {};

  render() {
    // console.log("State", this.state);
    return (
      <div>
        <div className="container">
          <Heading name={this.state.name} />

          <div className="col-lg-12 border border-secondary rounded-sm pt-3">
            <div className="row">
              {/* <div className="col-lg-2">
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
              </div> */}

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
                    {this.state.departments.map((department) => {
                      console.log("Department", department);
                      return (
                        <React.Fragment key={department.id}>
                          <option>{department.name}</option>
                        </React.Fragment>
                      )
                    })}
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
                  {/* {this.state.tableData.map((row, index) => (
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
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
