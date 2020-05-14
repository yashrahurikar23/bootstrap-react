import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const BASE_URL = "https://www.techmahindra.com";

export default class AttachmentsModal extends Component {
  render() {
    const { attachments, userProfile } = this.props;

    const linksList = attachments.map((attachment) => {
      return `${BASE_URL}/${userProfile}/${attachment}`;
    });

    console.log("Links list", linksList);

    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Attachment links</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>These are the attachments related to this project</p>
            {linksList.map((link, index) => (
              <React.Fragment>
                <a href={link} target="_blank">{link}</a>
                <br />
              </React.Fragment>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
