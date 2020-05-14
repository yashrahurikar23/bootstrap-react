import React, { Component } from "react";
import axios from "axios";
import { Card, Form, Col, Row, Button, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AttachmentsModal from "./AttachmentsModal";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      lineDetails: [],
      editedData: [],
      show: false,
      currentAttachments: [],
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

    // User details
    axios
      .get("http://www.mocky.io/v2/5ebd6c9a31000053505b13fc")
      .then((response) => {
        console.log("Response", response);
        this.setState({
          ...this.state,
          lineDetails: response.data,
        });
      })
      .catch((error) => {
        console.log("Error", error.response);
      });
  }

  onSave = (e) => {
    const detailsArray = this.state.lineDetails.map((entry) => {
      return {
        id: entry.id,
        experience: entry.experience,
        date: entry.date,
        status: entry.status,
      };
    });
    console.log("Details array", detailsArray);

    const requestBody = {
      employeeId: this.state.user.id,
      details: detailsArray,
    };

    axios
      .put("http://www.", requestBody)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("Error", error.response);
      });
  };

  onExperienceChange = (e, entryIndex) => {
    let stateClone = { ...this.state }; // State clone

    let { lineDetails } = stateClone;

    let entry = lineDetails[entryIndex];
    console.log("Entry", entry);

    entry.experience = e.target.value;

    lineDetails[entryIndex] = entry;

    this.setState(stateClone);
  };

  onDateChange = (e, entryIndex) => {
    let stateClone = { ...this.state }; // State clone

    let { lineDetails } = stateClone;

    let entry = lineDetails[entryIndex];

    entry.date = e.target.value;

    lineDetails[entryIndex] = entry;

    this.setState(stateClone);
  };

  onCheckboxCheck = (e, entryIndex) => {
    let stateClone = { ...this.state }; // State clone

    let { lineDetails } = stateClone;

    let entry = lineDetails[entryIndex];

    if (e.target.value === "on") {
      entry.checked = true;
    } else {
      entry.checked = false;
    }

    lineDetails[entryIndex] = entry;

    this.setState(stateClone);
  };

  handleModalOpen = (e, lineDetail) => {
    console.log("Line detail", lineDetail);
    this.setState({
      ...this.state,
      show: true,
      currentAttachments: lineDetail.attachments,
      currentUserProfile: lineDetail.user_profile,
    });
  };

  handleModalClose = () => {
    this.setState({
      ...this.state,
      show: false,
      currentAttachments: [],
      currentUserProfile: ""
    });
  };

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
                      <Form.Control
                        plaintext
                        readOnly
                        defaultValue={this.state.user.name}
                      />
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
                        defaultValue="Approval"
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

          <Card className="d-flex align-items-center w-100 mt-5">
            <Card.Body>
              <Card.Title>Details</Card.Title>
              <Card.Text>
                <Table striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Id</th>
                      <th>Department</th>
                      <th>Date</th>
                      <th>Project Id</th>
                      <th>Attachment</th>
                      <th>Experience</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.lineDetails.map((lineDetail, index) => (
                      <tr>
                        <td>{lineDetail.name}</td>
                        <td>{lineDetail.id}</td>
                        <td>{lineDetail.department}</td>
                        <td>{lineDetail.date}</td>
                        <td>{lineDetail.projectId}</td>
                        <td>
                          <Button
                            variant="link"
                            onClick={(e) => this.handleModalOpen(e, lineDetail)}
                          >
                            Link
                          </Button>
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            type="text"
                            onChange={(e) => this.onExperienceChange(e, index)}
                          />
                        </td>
                        <td>
                          <Form.Control
                            size="sm"
                            type="text"
                            onChange={(e) => this.onDateChange(e, index)}
                          />
                        </td>
                        <td>
                          <Form.Check
                            type="checkbox"
                            onChange={(e) => this.onCheckboxCheck(e, index)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Row>
                  <Col className="d-flex justify-content-end ml-5">
                    {this.state.lineDetails.length !== 0 && (
                      <Button onClick={this.onSave}>submit</Button>
                    )}
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <AttachmentsModal
            show={this.state.show}
            handleClose={this.handleModalClose}
            attachments={this.state.currentAttachments}
            userProfile={this.state.currentUserProfile}
          />
        </div>
      </React.Fragment>
    );
  }
}
