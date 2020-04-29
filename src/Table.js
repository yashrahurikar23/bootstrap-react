import React, { Component } from "react";
import { Table, Card } from 'react-bootstrap';

export default class Line extends Component {
  render() {
    return (
      <Card className="d-flex align-items-center mt-5 example-parent">
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
                <tr>
                  
                </tr>
              </tbody>
            </Table>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
