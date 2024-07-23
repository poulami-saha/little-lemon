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
    <section>
      <h1 className={styles.header}>Reservations</h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        <section className={styles.formSectionWide}>
          <label htmlFor="indoor" className={styles.label}>
            Indoor
          </label>
          <input
            type="radio"
            name="seating"
            value="indoor"
            id="indoor"
            onChange={handleChange}
            disabled={!isEditable}
            className={styles.option}
            checked={booking.seating === "indoor"}
          />

          <label htmlFor="outdoor" className={styles.label}>
            Outdoor
          </label>
          <input
            type="radio"
            name="seating"
            value="outdoor"
            id="outdoor"
            onChange={handleChange}
            disabled={!isEditable}
            className={styles.option}
            checked={booking.seating === "outdoor"}
          />
        </section>
        <section className={styles.formSection}>
          <article className={styles.formOption}>
            <label htmlFor="res-date" className={styles.label}>
              Date
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
          </article>
          <article className={styles.formOption}>
            <label htmlFor="guests" className={styles.label}>
              Number of Diners
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
          </article>
        </section>
        <section className={styles.formSection}>
          <article className={styles.formOption}>
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
          </article>
          <article className={styles.formOption}>
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
          </article>
        </section>

        {isEditable && (
          <button
            type="submit"
            className={styles.reserve}
            aria-label="On Click"
          >
            Make your reservation
          </button>
        )}
      </form>
    </section>
  );
};
export default BookingForm;
