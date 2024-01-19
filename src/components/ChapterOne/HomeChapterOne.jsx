import React from "react";
import Home from "../Home/Home";
import challengesList from "../../assets/challengesLists/chapterOne/challengesList";

function HomeChapterOne() {
  return (
    <Home
      chapterTitle="Chapter One - Hooks"
      chapterChallenges={challengesList}
      nextChapterLink="/ChapterTwo"
      prevChapterLink=''
    />
  );
}

export default HomeChapterOne;
