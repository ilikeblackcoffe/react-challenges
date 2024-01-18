import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import ChallengeOne from "./components/ChallengeOne/ChallengeOne";
import ChallengeTwo from "./components/ChallengeTwo/ChallengeTwo";
import ChallengeThree from "./components/ChallengeThree/ChallengeThree";
import ChallengeFour from "./components/ChallengeFour/ChallengeFour";



function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/challengeOne" Component={ChallengeOne } />
          <Route path="/challengeTwo" Component={ChallengeTwo } />
          <Route path="/challengeThree" Component={ChallengeThree } />
          <Route path="/challengeFour" Component={ChallengeFour } />
          
        </Routes>
        
    </Router>
  );
}

export default App;
