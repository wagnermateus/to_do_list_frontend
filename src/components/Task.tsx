import styles from "./styles/Task.module.css";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { useState } from "react";
import { TaskMoreInfo } from "./TaskMoreInfo";
interface TasksProps {
  id: string;
  name: string;
  date: string;
  notes: string;
  place: string;
  status: "to do" | "done";
}

export function Task(props: TasksProps) {
  const [isTaskMoreInfo, setIsTaskMoreInfo] = useState(false);
  function handleTaskMoreInfo() {
    setIsTaskMoreInfo(!isTaskMoreInfo);
  }
  return (
    <div>
      <div onClick={handleTaskMoreInfo} className={styles.Task}>
        <div className={styles.Task_Info}>
          <div className={styles.Task_Name_Container}>
            {props.status === "to do" ? (
              <p>{props.name}</p>
            ) : (
              <p>
                <s>{props.name}</s>
              </p>
            )}
          </div>

          <div className={styles.Status}>
            <p>
              {props.status === "to do" ? (
                <GiSandsOfTime />
              ) : (
                <MdOutlineDoneOutline />
              )}
            </p>
          </div>
        </div>
      </div>
      {isTaskMoreInfo && (
        <TaskMoreInfo
          id={props.id}
          date={props.date}
          status={props.status}
          place={props.place}
          notes={props.notes}
        />
      )}
    </div>
  );
}
