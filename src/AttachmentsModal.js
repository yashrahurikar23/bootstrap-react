import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

const base_url = "www.google.com";

export default class AttachmentModal extends Component {
  render() {
    const { attachments } = this.props;

    const linksList = attachments.map((attachment) => {
      return `${base_url}/${attachment.number.text}/${attachment.attachment.text}/${attachment.profile.text}`;
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
                <a href={link} target="_blank" download>
                  {link}
                </a>
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
