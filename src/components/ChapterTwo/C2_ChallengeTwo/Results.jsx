import React from "react";
import { Link } from "react-router-dom";


function Results() {
  return (
    <div className="mainContainer">
      <Link className="backBtn" to="/ChapterTwo/C2_ChallengeTwo">
        go back
      </Link>

      <div className="challengesContainer result">
        <h3>Form Submitted. Thank you!</h3>
       
      </div>
    </div>
  );
}

export default Results;