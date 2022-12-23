import styles from "./styles/TaskMoreInfo.module.css";

import { BsCalendarDate } from "react-icons/bs";
import { FaPlaceOfWorship } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FormEvent } from "react";

interface TaskMoreInfoProps {
  id: string;
  date: string;
  notes: string;
  place: string;
  status: "to do" | "done";
}
export function TaskMoreInfo(props: TaskMoreInfoProps) {
  async function deleteTask(e: FormEvent) {
    e.preventDefault();
    const id = props.id;
    try {
      const resp = await fetch(`http://localhost:3000/task/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      });
      /*  const data = await resp.json();
      console.log(data);*/
    } catch (error) {
      console.log(error);
    }
  }
  async function updateTaskStatus(e: FormEvent) {
    e.preventDefault();
    const id = props.id;
    const status = "done";
    try {
      const resp = await fetch(`http://localhost:3000/task/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ status }),
      });
      /* const data = await resp.json();
      console.log(data);*/
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <span>
          <FaPlaceOfWorship />
        </span>{" "}
        <p>{props.place}</p>
      </div>
      <div className={styles.Content}>
        <span>
          <BsCalendarDate />
        </span>{" "}
        <p>{props.date}</p>
      </div>
      <div className={styles.Content}>
        <span>
          <GrNotes />
        </span>{" "}
        <p>{props.notes}</p>
      </div>
      <div className={styles.Controls}>
        {props.status === "to do" ? (
          <div className={styles.Checkbox_Div}>
            <label htmlFor="checkbox-input">Concluída</label>
            <input
              type="checkbox"
              name="checkbox-input"
              onClick={updateTaskStatus}
            />
          </div>
        ) : (
          false
        )}

        <button onClick={deleteTask}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}
