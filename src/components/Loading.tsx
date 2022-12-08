import styles from "../components/styles/Loading.module.css";
import loading from "../assets/loading.svg";
export function Loading() {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="loading" />
    </div>
  );
}
