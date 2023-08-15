import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alerts from "./components/Alerts";
import Uuuu from "./components/Uuuu";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mobile from "./components/Mobile";
 
 

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (type, message) => {
    setalert({
      type: type,
      message: message,
    });
  };

  const [mode, setmode] = useState("light"); //whether the dark mode is available or not
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black"; //this line is used to set the all body color
      showAlert("Success", "Dark mode is Enabled!");
      document.title = "TextUtils-Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white"; //this line is used to set the all body color
      document.title = "TextUlits-Home";
    }
  };


   return (
    <Router>
      <>
        <div className="big-container" /*style={Style}*/>
          <Navbar
            title="TextUtils"
            about="About"
            contact="Contact"
            mode={mode}
            togglemode={togglemode}
          ></Navbar>

          <Alerts alert={alert} />
          <TextForm title={"text Area"} mode={mode} />
           
          <Routes>
            <Route exact path="/about" element={<About />}>
               
            </Route>
            <Route path="/Contact" element={<Mobile />}></Route>
             
          </Routes>
        </div>
        <Uuuu />
        
      </>
    </Router>
  );
}
export default App;
