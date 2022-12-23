import { useContext, useEffect, useState } from "react";
import style from "./styles/Tasks.module.css";
import { Task } from "./Task";
import MyContext from "../context/MyContext";

export function Tasks() {
  const { tasks, setTasks }: any = useContext(MyContext);
  const { searchTasks, setSearchTasks }: any = useContext(MyContext);
  async function getTasks() {
    try {
      const res = await fetch("http://localhost:3000/task", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function searchTaskByName() {
    try {
      const res = await fetch("http://localhost:3000/searchtask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: searchTasks }),
      });
      const data = await res.json();

      setTasks(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    searchTaskByName();
  }, [searchTasks]);
  useEffect(() => {
    if (searchTasks.trim() === "") {
      getTasks();
    }
  }, [tasks]);
  return (
    <div className={style.Tasks}>
      <h2>Tarefas:</h2>

      {tasks.map((task: any) => (
        <div key={task.id}>
          <Task
            id={task.id}
            name={task.name}
            place={task.place}
            notes={task.notes}
            date={task.date}
            status={task.status}
          />
        </div>
      ))}
    </div>
  );
}
