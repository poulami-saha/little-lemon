import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InfoSection.module.css";
const InfoSection = () => {
  const navigate = useNavigate();
  const navigateToBooking = () => {
    navigate("/booking");
  };

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Little Lemon</h1>
        <h2 className={styles.location}>Chicago</h2>
        <h3 className={styles.description}>
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist
        </h3>
        <button className={styles.reserve} onClick={navigateToBooking}>
          Reserve a Table
        </button>
      </div>
      <div className={styles.imageContainer}></div>
    </section>
  );
};

export default InfoSection;
