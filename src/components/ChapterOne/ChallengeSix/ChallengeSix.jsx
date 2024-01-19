import React, { useState } from "react";
import "./ChallengeSix.css";
import { Link } from "react-router-dom";
import challengesList from "../../../assets/challengesLists/chapterOne/challengesList";
import { FaHandPointUp  } from 'react-icons/fa';

//Adicionar useEffect nos textos de document.qselector

function ChallengeSix() {
  function startGame(e) {
    const gameDiv = document.querySelector(".challengeSixResult");
    const startBtn = document.querySelector("#startBtnSix");

    gameDiv.style.display = "grid";
    startBtn.style.display = "none";

    const gameTimer = setInterval(()=>{
      setCountdown(--countdown)
      if(countdown == 0){
        const gameBtn = document.querySelector(".clickmeSix");
        const gameResult = document.querySelector(".countdownSix");
        gameResult.innerHTML = `game over`
        gameBtn.style.display = "none";
        clearInterval(gameTimer)
      }
    }, 1000)


  }

  let [countdown, setCountdown] = useState(5);
  let [points, setPoints] = useState(0)

  function addPoint(){
    setPoints(++points)
  }

  return (
    <div className="mainContainer">
      <Link className="backBtn" to="/">
        go back
      </Link>
      <h1 className="mainTitle">{challengesList[5].name}</h1>
      <p id="description">
        <span className="boldText"> Description: </span>
        {challengesList[5].description}
      </p>

      <div className="challengesContainer result">
        <div className="startSessionChallengeSix">
          <button onClick={startGame} id="startBtnSix">
            Start
          </button>
        </div>
        <div className="challengeSixResult">
          <p className="countdownSix">countdown: <span className="countdownTimerSix"></span>{countdown}</p>
          <p className="pointsSix">{points}</p>
          <button className="clickmeSix" onClick={addPoint}><FaHandPointUp   /> click me</button>
        </div>
      </div>
    </div>
  );
}

export default ChallengeSix;
