import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTask] = useState([]);
  const [newtask, newTask] = useState("");

  const add = () => {
    // console.log("hi");
    if (newtask.trim() != "") {
      setTask([...tasks, newtask]);
      newTask("");
    }
    // console.log(tasks);
  };

  const taskElements = tasks.map((task, index) =>
    React.createElement(
      "li",
      { key: index, className: "flex justify-between items-center" },
      React.createElement("span", null, task)
    )
  );

  return (
    <>
      <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          To-Do List
        </h1>

        <div className="flex mb-4">
          <input
            id="taskInput"
            type="text"
            onChange={(e) => {
              newTask(e.target.value);
            }}
            placeholder="Enter a new task"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newtask}
          />
          <button
            id="submitBtn"
            onClick={add}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>

        <ul id="todoList" className="list-disc pl-5 space-y-2">
          {taskElements}
        </ul>
      </div>
    </>
  );
}

export default App;
