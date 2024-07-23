import styles from "./BookingInfo.module.css";

const BookingInfo = ({ task }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Reservations</h1>
      <h2 className={styles.location}>Chicago</h2>
      <h2 className={styles.location}>{task}</h2>
    </section>
  );
};
export default BookingInfo;
