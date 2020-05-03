import React, { Component } from "react";
import { Table, Card, Button } from "react-bootstrap";

export default class Line extends Component {
  render() {
    console.log("table props", this.props);
    return (
      <Card className="d-flex mt-5">
        <Card.Body>
          <Card.Title>Line</Card.Title>
          <Card.Text>
            <Table striped>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>department</th>
                  <th>Employee Name</th>
                  <th>Employee</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map((user) => (
                  <React.Fragment key={user.id}>
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.department}</td>
                      <td>{user.employee_name}</td>
                      <td>{user.employee}</td>
                      <td>{user.date}</td>
                      <td>{user.status}</td>
                      <td>
                        <Button onClick={(event) => this.props.onViewClick(event, user)}>
                          View Details
                        </Button>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
