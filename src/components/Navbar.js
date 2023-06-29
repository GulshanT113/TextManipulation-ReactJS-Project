import React, {useState} from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {

  const[Swich, setSwich] = useState('Go On Todo');

  const handleSwichCase = () => {
    if(Swich == 'Go On Todo')
    setSwich('Go On Text Manipulation');
    else
    setSwich('Go On Todo');
  }

  return (
    <nav style={props.myStyle} className="navbar navbar-expand-lg bg-body-tertiary">
      <div style={props.myStyle} className="container-fluid">
        <a style={props.myStyle} className="navbar-brand" href="/">
          <h1>{props.title}</h1>
        </a>
      </div>
      <div className="collapse-navbar-collapse" id="navbarSupportedContent">
        <button className="btn btn-outline-success" type="submit" onClick={handleSwichCase}>
          {Swich}
        </button>
        <button className="btn btn-outline-success" type="submit" onClick={props.toggleStyle}>
          {props.button}
        </button>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Rahul",
};
