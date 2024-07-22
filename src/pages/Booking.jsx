import BookingForm from "../components/BookingForm";
import styles from "./Booking.module.css";
import restaurant from "../assets/restaurant.jpg";
import restaurantChef from "../assets/restaurant chef B.jpg";
import { useReducer } from "react";
import { updateTimes, initialState } from "../store/reducer";

const Booking = () => {
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const onSubmit = (booking) => {
    console.log(booking);
  };
  return (
    <section className={styles.reservation}>
      <p className={styles.title}>Little Lemon</p>
      <p className={styles.location}>Chicago</p>
      <p className={styles.location}>Find a table for any occasion</p>
      <div className={styles.images}>
        <img src={restaurant} className={styles.image} alt="" />
        <img src={restaurantChef} className={styles.image} alt="" />
      </div>
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
        onSubmit={onSubmit}
      />
    </section>
  );
};
export default Booking;
