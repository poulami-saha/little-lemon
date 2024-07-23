import { useState } from "react";
import styles from "./BookingForm.module.css";

const BookingForm = ({
  availableTimes,
  dispatch,
  onSubmit,
  handleBookingDate,
  isEditable,
  bookingDetails,
}) => {
  console.log(availableTimes);
  const [booking, setBooking] = useState({
    ...bookingDetails,
    bookingTime: bookingDetails.bookingTime ?? availableTimes[0],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (booking.bookingName.length <= 0) {
      errors.bookingName = "Booking should be in a person's name";
    }

    if (new Date(booking.bookingDate) < new Date()) {
      errors.bookingDate = "Booking cannot be made for past date";
    }

    if (!availableTimes.includes(booking.bookingTime)) {
      errors.bookingTime = "Cannot book for the time selected";
    }

    if (booking.guestsCount < 1) {
      errors.guestsCount = "Minimum 1 guest to book a table";
    }

    return errors;
  };

  const handleDateChange = (e) => {
    handleChange(e);
    handleBookingDate(e.target.value);
    dispatch({ bookingDate: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(booking);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="bookingName" className={styles.label}>
        Your Name
      </label>
      <input
        type="text"
        id="booking-name"
        className={styles.input}
        value={booking.bookingName}
        name="bookingName"
        data-testid="bookingName"
        onChange={handleChange}
        disabled={!isEditable}
        placeholder="FirstName LastName"
      />
      {errors.bookingName && (
        <p style={{ color: "red" }}>{errors.bookingName}</p>
      )}
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
        onChange={handleDateChange}
        disabled={!isEditable}
      />
      {errors.bookingDate && (
        <p style={{ color: "red" }}>{errors.bookingDate}</p>
      )}
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
        disabled={!isEditable}
      >
        {isEditable ? (
          availableTimes.map((time) => <option key={time}>{time}</option>)
        ) : (
          <option key={booking.bookingTime}>{booking.bookingTime}</option>
        )}
      </select>
      {errors.bookingTime && (
        <p style={{ color: "red" }}>{errors.bookingTime}</p>
      )}
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
        disabled={!isEditable}
        required
      />
      {errors.guestsCount && (
        <p style={{ color: "red" }}>{errors.guestsCount}</p>
      )}
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
        disabled={!isEditable}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {isEditable && (
        <button type="submit" className={styles.reserve} aria-label="On Click">
          Make your reservation
        </button>
      )}
    </form>
  );
};
export default BookingForm;
