import { React, Suspense }  from 'react'
import C2_ChallengesList from '../../../assets/challengesLists/chapterTwo/C2_ChallengesList';
import { Link } from 'react-router-dom';


function C2_ChallengeOne() {
  return (
    <div className="mainContainer">
    <Link className="backBtn" to="/ChapterTwo">
      go back
    </Link>
    <h1 className="mainTitle">{C2_ChallengesList[0].name}</h1>
    <p id="description">
      <span className="boldText"> Description: </span>{" "}
      {C2_ChallengesList[0].description}
    </p>

    <div className="challengesContainer result ">

   
    </div>
    
  </div>
  )
}

export default C2_ChallengeOne;