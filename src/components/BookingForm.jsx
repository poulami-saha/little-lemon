import { useState } from "react";
import styles from "./BookingForm.module.css";

const defaultState = {
  bookingDate: "",
  bookingTime: "",
  guestsCount: 1,
  occasion: "birthday",
};
const BookingForm = ({ availableTimes, dispatch, onSubmit }) => {
  const [booking, setBooking] = useState(defaultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(booking);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="res-date" className={styles.label}>
        Choose date
      </label>
      <input
        type="date"
        id="booking-date"
        className={styles.input}
        value={booking.bookingDate}
        name="bookingDate"
        data-testid="bookingDate"
        onChange={(e) =>
          handleChange(e) && dispatch({ bookingDate: e.target.value })
        }
      />
      <label htmlFor="res-time" className={styles.label}>
        Choose time
      </label>
      <select
        id="booking-time"
        className={styles.input}
        value={booking.bookingTime ?? availableTimes[0]}
        name="bookingTime"
        onChange={handleChange}
        data-testid="bookingTime"
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests" className={styles.label}>
        Number of guests
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        className={styles.input}
        value={booking.guestsCount}
        name="guestsCount"
        onChange={handleChange}
        data-testid="guests"
      />
      <label htmlFor="occasion" className={styles.label}>
        Occasion
      </label>
      <select
        id="occasion"
        className={styles.input}
        value={booking.occasion}
        name="occasion"
        onChange={handleChange}
        data-testid="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit" className={styles.reserve}>
        Make your reservation
      </button>
    </form>
  );
};
export default BookingForm;
