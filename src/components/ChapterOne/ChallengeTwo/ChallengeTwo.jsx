import React, { useEffect, useRef, useState } from "react";
import challengesList from "../../../assets/challengesLists/chapterOne/challengesList";
import { Link } from "react-router-dom";
import "./ChallengeTwo.css";

function ChallengeTwo() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    const timer = useRef();

    useEffect(()=>{
        if(running){
            timer.current = setInterval(() => {
                setTime(pre => pre + 1)
            }, 1000)
        }
        return () => clearInterval(timer.current)
    }, [running])

    const format = (time) => {
        let hours = Math.floor(time / 60 / 60 % 24)
        let minutes = Math.floor(time / 60 % 60)
        let seconds = Math.floor(time % 60)

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return `${hours}:${minutes}:${seconds}`
    }

  return (
    <div className="mainContainer">
      <Link className="backBtn" to="/">
        go back
      </Link>
      <h1 className="mainTitle">{challengesList[1].name}</h1>
      <p id="description">
        <span className="boldText"> Description: </span>{" "}
        {challengesList[1].description}
      </p>

      <div className="challengesContainer result ">
        <div className="Timer">
            <h3 className="timerTitle">Timer:</h3>
            <div className="timeDiv"> <p className="timerPgraph">{format(time)}</p></div>
        </div>
      </div>
      <div className="challengesContainer  result gap">
      <button className="btn green" onClick={() => setRunning(true)}>Start</button>
      <button className="btn red" onClick={() => {
        if(running) clearInterval(timer.current)
        setRunning(!running)
      }}>Stop</button>
      <button className="btn gray" onClick={()=>setTime(0)}>Reset</button>
      </div>
      
    </div>
  );
}

export default ChallengeTwo;
