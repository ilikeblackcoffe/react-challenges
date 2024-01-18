import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import "./App.css";
import "./Home.css";
import challengesList from "../../assets/challengesList";

function Home() {
  return (
    <> 
    <div className="credits">
    <h3>Challenges Website:</h3>
    <ul>
      <li><a href="https://reactchallenges.live/dashboard/overview" target="_blank">reactchallenges.live</a></li>
    </ul>
    </div>    
    <div className="mainContainer">
      <h1 className="mainTitle">React Challenges</h1>
      <div className="challengesContainer">
        {challengesList.map((challenge) => (
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
    </div>
    </>
  );
}

export default Home;
