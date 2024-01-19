import React, { useState } from "react";
import "./ChallengeFive.css";
import { Link } from "react-router-dom";
import challengesList from "../../../assets/challengesLists/chapterOne/challengesList";

function ChallengeFive() {
  let [user, setUser] = useState({
    username: "",
    fullName: "",
    age: 0,
  });

  function submitUser(e) {
    e.preventDefault();

    let usernameInputValue = document.getElementById("username").value;

    let fullNameInputValue = document.getElementById("fullName").value;

    let ageInputValue = document.getElementById("age").value;

    console.log(usernameInputValue);
    console.log(fullNameInputValue);
    console.log(ageInputValue);

    setUser({
      username: usernameInputValue,
      fullName: fullNameInputValue,
      age: ageInputValue,
    });

    document.getElementById("username").value = '';
    document.getElementById("fullName").value = '';
    document.getElementById("age").value = '';
  }

  return (
    <div className="mainContainer">
      <Link className="backBtn" to="/">
        go back
      </Link>
      <h1 className="mainTitle">{challengesList[4].name}</h1>
      <p id="description">
        <span className="boldText"> Description: </span>{" "}
        {challengesList[4].description}
      </p>

      <div className="challengesContainer result">
        <form className="formFive">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full Name"
            required
          />
          <input
            type="number"
            name="age"
            id="age"
            placeholder="Age"
            min="0"
            max="120"
            required
          />
          <button className="fiveBtn" onClick={submitUser}>
            Submit
          </button>
        </form>
        <div className="outputFormFive">
          <h3>
            {user.username ? (
              <span>Output</span>
            ) : (
              <span className="waitingForDataFive">
                Waiting for data
                <div className="loading-spinner"></div>
              </span>
            )}
          </h3>

          {user.username ? (
            <>
              <ul className="ulFive">
                <li>{user.username}</li>
                <li>{user.fullName}</li>
                <li>{user.age}</li>
              </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChallengeFive;
