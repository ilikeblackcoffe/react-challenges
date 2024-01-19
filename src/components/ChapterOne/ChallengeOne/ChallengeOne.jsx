import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Challenge.css"
import challengesList from "../../../assets/challengesLists/chapterOne/challengesList";

function ChallengeOne() {
  
  let [toggle, setToggle] = useState(false);

  const toggleFunc = () => {
    let description = document.querySelector("#description")
    if(toggle == false) {
      description.classList.add("hidden")
      setToggle(true)
    } else if(toggle == true) {
      description.classList.remove("hidden")
      setToggle(false)
    }
  }

  return (
    <div className="mainContainer">
     <Link className="backBtn" to="/">go back</Link>
        <h1 className="mainTitle">{challengesList[0].name}</h1>
        <p id="description">
          <span className="boldText"> Description: </span> {challengesList[0].description}
        </p>
     

      <div className="challengesContainer result">
        <button className="btn pink" onClick={toggleFunc}>Show/Hide</button>
      </div>
    </div>
  );
}


export default ChallengeOne;
