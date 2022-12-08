import { useEffect, useState } from "react";
import style from "./styles/Tasks.module.css";
import { Task } from "./Task";

export function Tasks() {
  const [tasks, setTasks] = useState<any[]>([]);
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

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div className={style.Tasks}>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task
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
