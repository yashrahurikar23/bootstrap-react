import React, { Component } from "react";
import { Card, Form, Col, Row, Button, Table } from "react-bootstrap";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";

class linedetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineDetails: [],
      requestStatus: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ lineDetails: nextProps.lineDetails });
  }

  handleValidate = () => {
    const lineDetailsWithError = this.state.lineDetails.filter(
      (lineDetail) => lineDetail.error
    );
    if (lineDetailsWithError.length > 0) {
      return false;
    }

    return true;
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    const { claimId } = this.props;
    const { lineDetails } = this.state;
    const isSuccess = this.handleValidate();

    if (isSuccess) {
      const requestBody = {
        claimId: claimId,
        lineDetails: [],
      };

      if (lineDetails) {
        lineDetails.map((lineDetail) => {
          requestBody.lineDetails.push({
            ID: lineDetail.id,
            date: lineDetail.date,
            employee: lineDetail.employee,
            Status: lineDetail.status,
          });
        });
      }
      console.log("requestBody: ", requestBody);

      const url = "";
      try {
        const response = await axios.post(url, requestBody);
        console.log(response);
        if (response.status === 200) {
          this.props.history.push("");
        }
        this.setState({ requestStatus: true });
      } catch (err) {
        console.log(err);
        this.setState({ requestStatus: false });
      }
    }
  };

  render() {
    console.log("State", this.state);
    console.log("props", this.props);

    return (
      <React.Fragment>
        <div className="container-fluid">
          <Card className="d-flex align-items-center w-100 mt-5">
            <Card.Body>
              <Card.Title>Line Details</Card.Title>
              <Card.Text>
                <Form onSubmit={this.handleFormSubmit}>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Department</th>
                        <th>Department Id</th>
                        <th>Status</th>
                        <th>Project Id</th>
                        <th>Attachment</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.lineDetails.map((lineDetail, index) => (
                        <tr key={lineDetail}>
                          <td>{lineDetail.id}</td>
                          <td>{lineDetail.name}</td>
                          <td>{lineDetail.department}</td>
                          <td>{lineDetail.status}</td>
                          <td>{lineDetail.projectId}</td>

                          <td>
                            <Button
                              variant="link"
                              onClick={(event) =>
                                this.props.handleModalOpen(event, lineDetail)
                              }
                            >
                              More
                            </Button>
                          </td>
                          <td>
                            {/* <Form.Check type="checkbox" name={`Status[${iter}]`} onChange={(e) => this.handleOnChange(e, 'Status', iter)} checked={lineDetail.verifyStatus} /> */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Row>
                    <Col className="d-flex justify-content-end ml-5">
                      {this.state.requestStatus ? null : (
                        <Button type="submit">Submit</Button>
                      )}
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

export default withRouter(linedetails);
