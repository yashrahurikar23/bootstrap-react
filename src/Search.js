import React, { Component } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";

import DatePicker from "./DatePicker";

export default class Search extends Component {
  render() {
    console.log("Search props", this.props);

    return (
      <React.Fragment>
        <div className="d-flex align-items-center justify-content-between mt-3 mb-5 example-parent">
          <Col className="d-flex justify-content-start">
            <h3 className="yellow">Claims Listing</h3>
          </Col>
          <Button variant="primary" onClick={this.props.onClickOfSearchBtn}>
            Search
          </Button>
        </div>

        <Card>
          <Card.Body>
            <Card.Title>Search</Card.Title>
            <Card.Text>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Please enter a name"
                      onChange={this.props.onInputChange}
                    />
                  </Col>
                  <p>{this.props.errorMessage}</p>

                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Please enter the employee ID"
                      onChange={this.props.onInputChange}
                    />
                  </Col>
                  <p>{this.props.errorMessage}</p>

                  <DatePicker />

                  <Button
                    variant="primary"
                    onClick={this.props.onClickOfSearchBtn}
                  >
                    Search
                  </Button>
                </Form.Row>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
