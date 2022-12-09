import styles from "./styles/Task.module.css";

import { BsCalendarDate } from "react-icons/bs";
import { FaPlaceOfWorship } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { MdOutlineDoneOutline } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
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
  );
}
