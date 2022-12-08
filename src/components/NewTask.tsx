import style from "./styles/NewTask.module.css";
import { IoCloseOutline } from "react-icons/io5";

import { FormEvent, useState } from "react";
import Message from "./Message";

interface HeaderProps {
  handleNewTaskRender: (status: boolean) => void;
}

export function NewTask(props: HeaderProps) {
  const [newTaskComponentIsRender, setNewTaskComponentIsRender] =
    useState(false);

  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState<Date>();

  const [feedBackMessage, setFeedBackMessage] = useState<boolean>();

  async function createTask(e: FormEvent) {
    e.preventDefault();
    await fetch("http://localhost:3000/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        notes,
        place,
        date,
      }),
    })
      .then((resp) => resp.json())
      .catch((error) => console.log(error));
    handleFeedBackMessage();

    clearInputs();
  }
  function handleFeedBackMessage() {
    setFeedBackMessage(true);
    setTimeout(() => {
      setFeedBackMessage(false);
    }, 3000);
  }
  function clearInputs() {
    setName("");
    setPlace("");
    setNotes("");
    setDate(new Date());
  }

  function convertDate(dateParam: string) {
    const newDate = new Date(dateParam);
    setDate(newDate);
  }
  function handleNewTaskRender() {
    if (newTaskComponentIsRender) {
      setNewTaskComponentIsRender(false);
    }
    props.handleNewTaskRender(newTaskComponentIsRender);
  }
  return (
    <div className={style.container}>
      <span className={style.Exit_Button} onClick={handleNewTaskRender}>
        {<IoCloseOutline />}
      </span>
      <h2>Nova Tarefa</h2>
      <form onSubmit={createTask}>
        <div className={style.Inputs}>
          <label htmlFor="name">Tarefa:</label>
          <input
            type="text"
            name="name"
            placeholder="O que vai fazer?"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className={style.Inputs}>
          <label htmlFor="place">Local:</label>
          <input
            type="text"
            name="place"
            placeholder="Onde fazer?"
            onChange={(e) => setPlace(e.target.value)}
            value={place}
            required
          />
        </div>

        <div className={style.Inputs}>
          <label htmlFor="date">Data/hora:</label>
          <input
            type="datetime-local"
            id="date-input"
            name="date"
            onChange={(e) => convertDate(e.target.value)}
            required
          />
        </div>

        <textarea
          name="notes"
          placeholder="Notas"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          required
        />
        {feedBackMessage ? (
          <Message type="success" msg="Tarefa criada com sucesso!" />
        ) : (
          <button type="submit">
            <b>Criar</b>
          </button>
        )}
      </form>
    </div>
  );
}
