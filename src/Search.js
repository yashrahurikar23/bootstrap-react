import React, { Component } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";

export default class Search extends Component {
  render() {
    console.log("Search props", this.props);

    return (
      <React.Fragment>
        <div className="d-flex align-items-center mt-3 mb-5 example-parent">
          <Row>
            <Col>
              <h3>Claims Listing</h3>
            </Col>
          </Row>
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
