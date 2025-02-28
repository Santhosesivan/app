import React, { useState } from "react";
import FoodCard from "./FoodCard";
import car from "./car.jpg";
import Pages from "./Pages";
const App = () => {
  // function signUp() {
  //   if (document.getElementById("userName").value == "santhosh") {
  //     setisError(false);
  //   } else {
  //     setisError(true);
  //   }
  // }

  const [isError, setisError] = useState(false);
  function login() {
    localStorage.setItem("userName", "santhosh");
  }
  return (
    <div>
      <Pages />

     
      {/* 
      <input id="userName" />
      {isError == true && <p>Error</p>}
      <button onClick={signUp}>Sign up</button> */}
    </div>
  );
};

export default App;
