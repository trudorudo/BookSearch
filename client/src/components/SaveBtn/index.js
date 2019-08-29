import React from "react";
import "./style.css";


export default function SaveBtn(props) {
    return (
      <span className="save-btn" {...props} role="button" tabIndex="0">
       Save
      </span>
    );
  }