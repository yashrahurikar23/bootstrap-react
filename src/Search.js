import React, { Component } from "react";
import { Card, Form, Col, Row, Button } from "react-bootstrap";
import { Formik } from "formik";

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
              <Formik
                initialValues={{
                  id: "",
                  employeeId: "",
                  dateRange: "",
                  location: "",
                  status: "",
                }}
                validate={(values) => {
                  const errors = {};
                  console.log("values ", values);
                  if (!values.id && !values.employeeId) {
                    errors.mandatory = true;
                  }
                  return errors;
                }}
                onSubmit={(values) => {
                  console.log("values:", values);
                  // this.props.onClickSearch(values);
                  this.props.onClickOfSearchBtn();
                }}
              >
                {({ values, errors, handleChange, handleSubmit }) => {
                  console.log("Errors inside", errors);
                  return (
                    <Form onSubmit={handleSubmit}>
                      <Form.Row>
                        <Col>
                          <Form.Control
                            type="text"
                            placeholder="ID"
                            name="id"
                            onChange={handleChange}
                            value={values.id}
                          />
                          {errors.mandatory ? (
                            <p className="error-message">Required</p>
                          ) : null}
                        </Col>
                        <Col>
                          <Form.Control
                            placeholder="Employee ID"
                            name="employeeId"
                            onChange={handleChange}
                            value={values.employeeId}
                          />
                          {errors.mandatory ? (
                            <p className="error-message">Required</p>
                          ) : null}
                        </Col>

                        <Col>
                          <Form.Control
                            as="select"
                            name="financialLocation"
                            onChange={handleChange}
                          >
                            {/* {this.props.location.map((location) => (
                            <option key={location.id}>{location}</option>
                          ))} */}
                            <option key="1">Pune</option>
                            <option key="2">Mumbai</option>
                            <option key="3">Delhi</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Control
                            as="select"
                            name="statuses"
                            onChange={handleChange}
                          >
                            {/* {this.props.statuses.map((statuses) => (
                            <option key={statuses.id}>{statuses}</option>
                          ))} */}
                            <option key="1">Inactive</option>
                            <option key="2">Active</option>
                          </Form.Control>
                        </Col>

                        <Button variant="primary" type="submit">
                          Search
                        </Button>
                      </Form.Row>
                    </Form>
                  );
                }}
              </Formik>
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
