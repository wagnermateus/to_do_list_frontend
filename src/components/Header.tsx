import styles from "./styles/Header.module.css";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
interface HeaderProps {
  handleNewTaskRender: (status: boolean) => void;
}
export function Header(props: HeaderProps) {
  const [newTaskComponentIsRender, setNewTaskComponentIsRender] =
    useState(true);

  const { searchTasks, setSearchTasks }: any = useContext(MyContext);

  function handleNewTaskRender() {
    if (!newTaskComponentIsRender) {
      setNewTaskComponentIsRender(true);
    }
    props.handleNewTaskRender(newTaskComponentIsRender);
  }

  return (
    <div className={styles.Header}>
      <h1>Lista De Afazeres</h1>

      <div className={styles.Header_Content}>
        <button onClick={handleNewTaskRender}>
          <BiMessageSquareAdd />
        </button>
        <div className={styles.Inputs}>
          <label htmlFor="search">Pesquisar:</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Pesquisar..."
            onChange={(e) => setSearchTasks(e.target.value)}
          />
        </div>
        <div className={styles.Inputs}>
          <label htmlFor="filter-option">Filtrar</label>
          <select id="filter-option">
            <option value="all">Todos</option>
            <option value="done">Concluídos</option>
            <option value="to do">Por Fazer</option>
          </select>
        </div>
      </div>
    </div>
  );
}
