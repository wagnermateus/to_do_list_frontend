import styles from "./styles/Task.module.css";

import { BsCalendarDate } from "react-icons/bs";
import { FaPlaceOfWorship } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
interface TasksProps {
  id?: string;
  name: string;
  date: string;
  notes: string;
  place: string;
  status: "to do" | "done";
}
export function Task(props: TasksProps) {
  return (
    <div className={styles.Task}>
      <div className={styles.Task_Info}>
        <p>{props.name}</p>
        <p>{props.status === "to do" ? "Por fazer" : "Concluído"}</p>
      </div>
      <div className={styles.More_Info}>
        <div>
          <span>
            <BsCalendarDate />:
          </span>
          <p>{props.date}</p>
        </div>
        <div>
          <span>
            <FaPlaceOfWorship />:
          </span>
          <p>{props.place}</p>
        </div>

        <div>
          <span>
            <GrNotes />:
          </span>
          <p>{props.notes}</p>
        </div>
      </div>
    </div>
  );
}
