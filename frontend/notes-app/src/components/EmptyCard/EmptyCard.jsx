import React from "react";
import styles from "./EmptyCard.module.css"; // Import CSS module

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className={styles.emptyCard}>
      <img src={imgSrc} alt="No notes" className={styles.image} />

      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default EmptyCard;
