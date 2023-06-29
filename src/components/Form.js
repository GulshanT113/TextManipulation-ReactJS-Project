import { useState } from "react";

export default function Form(props) {

  let firstCharUpper = function (str) {
    let strArr = str.split(" ");
    let ans = "";

    for (let index = 0; index < strArr.length; index++) {
      let ansStr = strArr[index];
      let firstChar = ansStr.charAt(0);
      let apartFromFirstChar = ansStr.slice(1);

      let ans1 = firstChar.toUpperCase();
      let ans2 = apartFromFirstChar.toLowerCase();

      ans = ans + ans1 + ans2 + " ";
    }
    return ans;
  };
  const handleCapitalizeCase = () => {
    setText(fetchFirstCharUpper);
    props.showAlert('text changed in the form of Capitalize case : successfully!')
  };
  const handleUpperCase = () => {
    // console.log("handleUpperCase");
    let newTest = text.toUpperCase();
    setText(newTest);
    props.showAlert('text changed in the form of upper case : successfully!')
  };

  const handleLowerCase = () => {
    // console.log("handleLowerCase");
    let newTest = text.toLowerCase();
    setText(newTest);
    props.showAlert('text changed in the form of lower case : successfully!')
  };

  const handleClearText = () => {
    // console.log("handleLowerCase");
    setText("");
    props.showAlert('text clear : successfully!')
  };

  const handleOnChange = (e) => {
    // console.log("handleOnChange");
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  let fetchFirstCharUpper = firstCharUpper(text);

  // text = "sofkdskfms" this is wrong way to update state.
  // setText("fjsdlkfjsdlf") this is the write way to update states.

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>{props.textTitle}</h2>
        </label>
        <textarea
          className="form-control"
          style={props.myStyle}
          id="exampleFormControlTextarea1"
          rows="12"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="container">
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Change to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Change to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalizeCase}>
          Change Into CapitalizeCase
        </button>
        <button style={props.myStle} className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text Area
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={toggleStyle}>
          {button}
        </button> */}
      </div>
      <div style={props.myStyle} className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          <b>
            Words '{text.split(" ").length}' and Characters '{text.length}'
          </b>
        </p>
        <p>
          <b>
            You Can Read This Text in "{0.007 * text.split(" ").length}"
            Minutes.
          </b>
        </p>
        <h2>Preview</h2>
        <p style={props.myStle}>{text.length > 0 ? text : "Enter Somthing In Text Area To Preview"}</p>
      </div>
    </>
  );
}
