import React, { Component } from "react";
// import Info from "./formikInfo";
import Linedetails from "./LineDetails";
import axios from "axios";
import AttachmentModal from "./AttachmentsModal";
export default class details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claim: {},
      lineDetails: [],
      show: false,
      currentAttachments: [],
    };

    this.getClaims = this.getClaims.bind(this);
  }

  async getClaims() {
    try {
      const response = await axios.get(
        `http://www.mocky.io/v2/5ec2c2142f000026ebc355d7`
      );
      console.log("api response: ", response);
      this.setState({
        ...this.state,
        // claim: response.data.Claim[0],
        lineDetails: response.data.users,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }

  componentDidMount() {
    this.getClaims();
  }

  handleModalOpen = (event, lineDetails) => {
    console.log("Line detail", lineDetails);
    this.setState({
      ...this.state,
      show: true,
      currentAttachments: lineDetails.attachments,
    });
  };

  handleModalClose = () => {
    this.setState({
      ...this.state,
      show: false,
      currentAttachments: [],
    });
  };

  render() {
    const { claim } = this.state;
    return (
      <React.Fragment>
        <div>
          <Linedetails
            claimId={claim.claimId}
            lineDetails={this.state.lineDetails}
            handleModalOpen={this.handleModalOpen}
          />
        </div>
        <AttachmentModal
          show={this.state.show}
          handleClose={this.handleModalClose}
          attachments={this.state.currentAttachments}
        />
      </React.Fragment>
    );
  }
}
