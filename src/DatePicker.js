import React from "react";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from 'react-date-range';

export default function DatePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const dateRangeHandler = (event) => {
    console.log("Start date", event.selection.startDate)
    console.log("End date", event.selection.endDate)

    setState([event.selection])
  }

  return (
    <React.Fragment>
      <DateRange
        editableDateInputs={true}
        onChange={dateRangeHandler}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      ;
    </React.Fragment>
  );
}
