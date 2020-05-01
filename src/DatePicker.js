import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Form, Button } from "react-bootstrap";


export default function DatePicker() {
  return (
    <React.Fragment>
      <DateRangePicker as="select">
      <Button>
        <i className="fa fa-calendar"/> &nbsp;
        <span></span>
        <i className="fa fa-angle-down"/>
    </Button>
      </DateRangePicker>
    </React.Fragment>
  );
}
