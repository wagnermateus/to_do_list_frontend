import "./App.css";

import { Tasks } from "./components/Tasks";
import { NewTask } from "./components/NewTask";
import { Header } from "./components/Header";
import { useState } from "react";
import MyContext from "./context/MyContext";
function App() {
  const [newTaskComponentIsRender, setNewTaskComponentIsRender] =
    useState(false);
  const [tasks, setTasks] = useState<any[]>([]);
  const [searchTasks, setSearchTasks] = useState("");
  function updateNewTaskComponentStatus(status: boolean) {
    setNewTaskComponentIsRender(status);
  }

  return (
    <MyContext.Provider
      value={{ tasks, setTasks, searchTasks, setSearchTasks }}
    >
      <div className="App">
        <div className="Container">
          <Header handleNewTaskRender={updateNewTaskComponentStatus} />
          {newTaskComponentIsRender && (
            <NewTask handleNewTaskRender={updateNewTaskComponentStatus} />
          )}
          <Tasks />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
