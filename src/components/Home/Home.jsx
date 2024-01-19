import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Home.css";

function Home({ chapterTitle, chapterChallenges, nextChapterLink, prevChapterLink }) {
  return (
    <> 
      <div className="credits">
        <h3>Challenges Website:</h3>
        <ul>
          <li><a href="https://reactchallenges.live/dashboard/overview" target="_blank">reactchallenges.live</a></li>
        </ul>
      </div>    
      <div className="mainContainer">
        <div className="titleDiv">
          <h1 className="mainTitle">React Challenges</h1>
          <span className="">{chapterTitle}</span>
        </div>
        <div className="challengesContainer">
          {chapterChallenges.map((challenge) => (
            <div className="challenge" key={challenge.id}>
              <Link className="challengeTitle" to={`/${challenge.path}`}>
                {challenge.name}
              </Link>
              <p className="challengeDescription">
                <span className="boldText"> Description: </span>
                {challenge.description}
              </p>
              <span className="level ">{challenge.level}</span>
            </div>
          ))}
        </div>
        <div className={`chaptersHome ${!prevChapterLink?"mleftAuto":""}`}>
          {prevChapterLink && (
            <Link to={prevChapterLink}>Previous Chapter</Link>
            )}
          {nextChapterLink && (
            <Link to={nextChapterLink}>Next Chapter</Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
