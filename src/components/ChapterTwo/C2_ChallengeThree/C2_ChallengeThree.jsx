import React from "react";
import { Link } from "react-router-dom";
import C2_ChallengesList from "../../../assets/challengesLists/chapterTwo/C2_ChallengesList";

function C2_ChallengeThree() {
  return (
    <div className="mainContainer">
      <Link className="backBtn" to="/ChapterTwo">
        go back
      </Link>
      <h1 className="mainTitle">{C2_ChallengesList[2].name}</h1>
      <p id="description">
        <span className="boldText"> Description: </span>
        {C2_ChallengesList[2].description}
      </p>

      <div className="challengesContainer result ">
        <div className="customersChallengeThree">
            <ul>
                <li>Ram</li>
                <li>Lakshman</li>
                <li>Bheem</li>
            </ul>
        </div>
        <div className="idsChallengeThree">
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default C2_ChallengeThree;
