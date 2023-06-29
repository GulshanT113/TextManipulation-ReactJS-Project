import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [button, setButton] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color == "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setButton("Enable Drak Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setButton("Enable Light Mode");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (msg) => {
    setAlert({
      msg : msg
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }


  return (
    <>
      <Navbar title="GulshanT" myStyle={myStyle} button={button} toggleStyle={toggleStyle} />
      <Alert alert={alert} myStyle={myStyle} />
      <div className="container">
        <Form textTitle="Write Somting Here..." myStyle={myStyle} showAlert= {showAlert}/>
      </div>
    </>
  );
}
export default App;
