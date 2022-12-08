import { useState, useEffect } from "react";
import styles from "../components/styles/Message.module.css";

interface MessageProps {
  type: string;
  msg: string;
}
export default function Message({ type, msg }: MessageProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}
