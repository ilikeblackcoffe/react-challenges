// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChallengeOne from "./components/ChapterOne/ChallengeOne/ChallengeOne";
import ChallengeTwo from "./components/ChapterOne/ChallengeTwo/ChallengeTwo";
import ChallengeThree from "./components/ChapterOne/ChallengeThree/ChallengeThree";
import ChallengeFour from "./components/ChapterOne/ChallengeFour/ChallengeFour";
import ChallengeFive from "./components/ChapterOne/ChallengeFive/ChallengeFive";
import ChallengeSix from "./components/ChapterOne/ChallengeSix/ChallengeSix";
import HomeChapterOne from "./components/ChapterOne/HomeChapterOne";
import HomeChapterTwo from "./components/ChapterTwo/HomeChapterTwo";
import C2_ChallengeOne from "./components/ChapterTwo/C2_ChallengeOne/C2_ChallengeOne";
import C2_ChallengeTwo from "./components/ChapterTwo/C2_ChallengeTwo/C2_ChallengeTwo"
import Results from "./components/ChapterTwo/C2_ChallengeTwo/Results";
import C2_ChallengeThree from "./components/ChapterTwo/C2_ChallengeThree/C2_ChallengeThree";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeChapterOne />} />

        <Route path="/challengeOne" element={<ChallengeOne />} />
        <Route path="/challengeTwo" element={<ChallengeTwo />} />
        <Route path="/challengeThree" element={<ChallengeThree />} />
        <Route path="/challengeFour" element={<ChallengeFour />} />
        <Route path="/challengeFive" element={<ChallengeFive />} />
        <Route path="/challengeSix" element={<ChallengeSix />} />

        <Route path="/ChapterTwo/" element={<HomeChapterTwo />} />
        <Route path="/ChapterTwo/C2_ChallengeOne" element={<C2_ChallengeOne />} />
        <Route path="/ChapterTwo/C2_ChallengeTwo" element={<C2_ChallengeTwo />} />
        <Route path="/ChapterTwo/C2_ChallengeTwo/results" element={<Results />} />
        <Route path="/ChapterTwo/C2_ChallengeThree" element={<C2_ChallengeThree />} />

        
      </Routes>
    </Router>
  );
}

export default App;
