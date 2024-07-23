import styles from "./BookingInfo.module.css";
import restaurant from "../assets/restaurant.jpg";
import restaurantChef from "../assets/restaurant chef B.jpg";

const BookingInfo = ({ task }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Little Lemon</h2>
      <h2 className={styles.location}>Chicago</h2>
      <h2 className={styles.location}>{task}</h2>
      <div className={styles.images}>
        <img src={restaurant} className={styles.image} alt="" />
        <img src={restaurantChef} className={styles.image} alt="" />
      </div>
    </section>
  );
};
export default BookingInfo;
