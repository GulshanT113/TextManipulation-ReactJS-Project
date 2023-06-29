import React from "react";

const Alert = (props) => {
  return (
    <>
    {props.alert && <div style={props.myStyle} class="alert alert-success" role="alert">
      <span>{props.alert.msg}</span>
    </div>}
    </>
  );
};

export default Alert;
