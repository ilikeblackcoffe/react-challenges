import React, { useState } from "react";
import { Link } from "react-router-dom";
import challengesList from "../../assets/challengesList";
import "./ChallengeThree.css";
import { FaTrash } from 'react-icons/fa';


function ChallengeThree() {

    let [tasks, setTasks] = useState([]);
   

    function addTask(){
        const inputValue = document.getElementById("todoTask").value;
        if(inputValue.length >= 1) {
            setTasks([...tasks, inputValue])
        }
        document.getElementById("todoTask").value = "";
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }


  return (
    <div className="mainContainer">
      <Link className="backBtn" to="/">
        go back
      </Link>
      <h1 className="mainTitle">{challengesList[2].name}</h1>
      <p id="description">
        <span className="boldText"> Description: </span>
        {challengesList[2].description}
      </p>

      <div className="todoResult">
        <div className="inputToDo">
          <label htmlFor="todoTask">
            New Task:
            <input
              type="text"
              name="todoTask"
              id="todoTask"
              placeholder="write your task here"
            />
          </label>
          <button onClick={addTask}>Add</button>

          <div className="toDoList">
          <h3>Tasks:</h3>
          <ul style={{display: tasks.length >=1 ? "block" : "none"}}>
           {  tasks.map((task, index) => (
            <li key={index}><p className="taskItemPgraph">{task} <FaTrash className="deleteIcon" title="Delete Task" onClick={() => deleteTask(index)}/></p></li>
            )) }
            </ul>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default ChallengeThree;
