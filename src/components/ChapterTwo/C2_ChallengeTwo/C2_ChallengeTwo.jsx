import React, { useState } from "react";
import C2_ChallengesList from "../../../assets/challengesLists/chapterTwo/C2_ChallengesList";
import { Link } from "react-router-dom";
import "./C2_ChallengeTwo.css";

function C2_ChallengeTwo() {
  const [user, setUser] = useState({
    username: "",
    gender: "",
    age: "",
  });

  const c2_Date = new Date();
  const c2_AnoAtual = c2_Date.getFullYear();

 
   
  return (
   
    <div className="mainContainer">
      <Link className="backBtn" to="/ChapterTwo">
        go back
      </Link>
      <h1 className="mainTitle">{C2_ChallengesList[1].name}</h1>
      <p id="description">
        <span className="boldText"> Description: </span>
        {C2_ChallengesList[1].description}
      </p>

      <div className="challengesContainer result ">
        <form action="POST" className="c2_challengeTwoForm">
          <label htmlFor="username">
            Username:
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </label>

          <p className="pgraphForm">Gender:</p>
          <div className="genderDiv">
            <div>
              <input
                type="radio"
                id="male"
                name="male"
                value="male"
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="female"
                value="female"
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <label htmlFor="birthDate">
            Birth Date: <br />
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              onChange={(e) =>
                setUser({ ...user, age: c2_AnoAtual - new Date(e.target.value).getFullYear() })
              }
              
            />
          </label>
          <br />
          <div className="c2_divBtnForm">
            <Link to="/ChapterTwo/C2_ChallengeTwo/results" className="c2_formBtn">
              Confirm
            </Link>
          </div>
        </form>
      </div>
    </div>
  
  );
}

export default C2_ChallengeTwo;


