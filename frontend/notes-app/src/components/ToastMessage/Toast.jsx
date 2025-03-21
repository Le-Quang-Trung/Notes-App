import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./Toast.module.css"; // Import CSS module

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div
      className={`${styles.toastContainer} ${isShown ? styles.show : ""}`}
    >
      <div
        className={`${styles.toastBox} ${
          type === "delete" ? styles.delete : styles.success
        }`}
      >
        <div className={styles.toastContent}>
          <div
            className={`${styles.iconContainer} ${
              type === "delete" ? styles.delete : styles.success
            }`}
          >
            {type === "delete" ? (
              <MdDeleteOutline className="text-xl text-red-500" />
            ) : (
              <LuCheck className="text-xl text-green-500" />
            )}
          </div>

          <p className={styles.toastMessage}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
