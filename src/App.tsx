import "./App.css";

import { Tasks } from "./components/Tasks";
import { NewTask } from "./components/NewTask";
import { Header } from "./components/Header";
import { useState } from "react";
import { Loading } from "./components/Loading";
function App() {
  const [newTaskComponentIsRender, setNewTaskComponentIsRender] =
    useState(false);

  function updateNewTaskComponentStatus(status: boolean) {
    setNewTaskComponentIsRender(status);
  }

  return (
    <div className="App">
      <div className="Container">
        <Header handleNewTaskRender={updateNewTaskComponentStatus} />
        {newTaskComponentIsRender && (
          <NewTask handleNewTaskRender={updateNewTaskComponentStatus} />
        )}
        <Tasks />
      </div>
    </div>
  );
}

export default App;
