import React, { Component } from "react";
import axios from "axios";
import { Card, Form, Col, Row, Button, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;

    axios
      .get(`http://www.mocky.io/v2/5eaeea3533000069009f4263`)
      .then((response) => {
        console.log("response", response);
        this.setState({ ...this.state, user: response.data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  render() {

    console.log("State", this.state);
    return (
      <React.Fragment>
      <div className="d-flex align-items-center mt-3 mb-5 example-parent">
        <Col className="d-flex justify-content-start ml-2">
          <h3>Details</h3>
        </Col>

        <Col className="d-flex justify-content-end ml-5">
          <NavLink exact={true} to="/claim_listing">
            <Button type="submit">MainPage</Button>
          </NavLink>
        </Col>
      </div>

      <div className="container-fluid">
        <Card className="d-flex mt-5">
          <Card.Body>
            <Card.Title>General Information</Card.Title>
            <Card.Text>
              <Form>
                <Row>
                  <Col className="col-md-2 bg-light mb-2 ">
                    <Form.Control plaintext readOnly defaultValue="ID " />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue={this.state.user.name} />
                  </Col>

                  <Col className="col-md-2 bg-light mb-2">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue={this.state.user.department}
                    />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue=" " />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-2 bg-light mb-2">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="Department "
                    />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue=" " />
                  </Col>

                  <Col className="col-md-2 bg-light mb-2">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="Dept Name "
                    />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue=" " />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-2 bg-light mb-2">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="Project "
                    />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue=" " />
                  </Col>

                  <Col className="col-md-2 bg-light mb-2">
                    <Form.Control plaintext readOnly defaultValue="date " />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue=" " />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-2 bg-light mb-2">
                    <Form.Control plaintext readOnly defaultValue="Amount " />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue=" " />
                  </Col>
                </Row>

                <Row>
                  <Col className="col-md-2 bg-light mb-2">
                    <Form.Control plaintext readOnly defaultValue="Status " />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue=" " />
                  </Col>

                  <Col className="col-md-2 bg-light mb-2">
                    <Form.Control
                      plaintext
                      readOnly
                      defaultValue="Approval "
                    />
                  </Col>

                  <Col className="col-md-4 mb-2">
                    <Form.Control plaintext readOnly defaultValue=" " />
                  </Col>
                </Row>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
    );
  }
}
