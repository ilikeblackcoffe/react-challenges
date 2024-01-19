import React, { useState } from "react";
import "./ChallengeFour.css";
import { Link } from "react-router-dom";
import challengesList from "../../../assets/challengesLists/chapterOne/challengesList";

function ChallengeFour() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (e) => {
    if (progress <= 100) {
      let value = parseInt(e.target.value, 10);
      value = Math.min(100, Math.max(0, value));
      setProgress(value);
    }
  };

  return (
    <div className="mainContainer">
      <Link className="backBtn" to="/">
        go back
      </Link>
      <h1 className="mainTitle">{challengesList[3].name}</h1>
      <p id="description">
        <span className="boldText"> Description: </span>{" "}
        {challengesList[3].description}
      </p>

      <div className="challengesContainer result">
        <div className="progressBar" >
          <div className="progressBarFill" >
            <div className="progressPercent" style={{ width: `${progress}%` }}>
              <span className="percentNumberProg">{progress}%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pbarDiv">
        <input
          type="number"
          name="percentProgBar"
          id="percentProgBar"
          defaultValue="0"
          onChange={handleProgressChange}
          min="0"
          max="100"
        />
      </div>
    </div>
  );
}

export default ChallengeFour;
