import React from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  var userData = [
    { userName: "Santhosh", passcode: 123, cart: [] },
    { userName: "Mathesh", passcode: 234, cart: [] },
    { userName: "Nadish", passcode: 345, cart: [] },
  ];

  // function signUp() {
  //   var userName = document.getElementById("userName").value;
  //   var userPasscode = document.getElementById("passcode").value;
  //   window.location.replace("/home");
  //   console.log(userName, userPasscode);
  // }

  function navigate() {
    window.location.replace("/home");
  }

  return (
    <div>
      <input id="userName" />
      <input id="passcode" />
      <button onClick={navigate} className="">
        Login
      </button>
    </div>
  );
};

export default Login;
