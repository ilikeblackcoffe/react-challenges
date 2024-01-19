import React from "react";
import Home from "../Home/Home";
import challengesListChapterTwo from "../../assets/challengesLists/chapterTwo/C2_ChallengesList";



function HomeChapterTwo() {
  return (
    <Home
      chapterTitle="Chapter Two - Router"
      chapterChallenges={challengesListChapterTwo}
      nextChapterLink="/ChapterThree"
      prevChapterLink="/"
    />
  );
}

export default HomeChapterTwo;
