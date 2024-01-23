import React, { lazy, Suspense, useState } from "react";
import C2_ChallengesList from "../../../assets/challengesLists/chapterTwo/C2_ChallengesList";
import { Link } from "react-router-dom";
import "./C2_ChallengeOne.css";
import loadingGif from "../../../assets/midia/pacmanLoad.gif";

const SuspenseResult = lazy(() => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(import("./SuspenseResult")), 4000)
  );
});

function C2_ChallengeOne() {
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setButtonPressed(true);
  };

  return (
    <div className="mainContainer">
      <Link className="backBtn" to="/ChapterTwo">
        go back
      </Link>
      <h1 className="mainTitle">{C2_ChallengesList[0].name}</h1>
      <p id="description">
        <span className="boldText"> Description: </span>
        {C2_ChallengesList[0].description}
      </p>
      <div className="challengesContainer result">
      <button style={{ display: buttonPressed ? "none" : "" }} className="loadingBtn" onClick={handleButtonClick}>Load</button>
      </div>
      <div className="lodingDiv">
        {buttonPressed && (
          <Suspense fallback={<><img className="loadingGif" src={loadingGif} />
          <p>loading....</p></>
          }>
            <SuspenseResult />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default C2_ChallengeOne;
