import React, { Component } from "react";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  };

  onInputChange = (event) => {
    // console.log("Event", event.target.value);
    this.setState({ ...this.state, name: event.target.value });
  };

  
  render() {
    console.log("State", this.state);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 border border-primary">
              <div className="row">
                <h1>Dashboard</h1>
                <p>{this.state.name}</p>
              </div>
            </div>

            <div className="col-lg-12 border border-secondary rounded-sm pt-3">
              <div className="row">
                <div className="col-lg-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    onChange={this.onInputChange}
                  ></input>
                </div>

                <div className="col-lg-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="IBU"
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
                    <select className="form-control" id="exampleFormControlSelect1">
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
                    <select className="form-control" id="exampleFormControlSelect1">
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
                    <tr className="border border-secondary rounded-sm">
                      <th scope="row">1</th>
                      <td>Yash</td>
                      <td>Rahurikar</td>
                      <td>BT</td>
                      <td>Department</td>
                      <td>Rank</td>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
