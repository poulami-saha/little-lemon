import { useState } from "react";
import styles from "./BookingDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChampagneGlasses,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const BookingDetails = ({ bookingDetails, onSubmit }) => {
  const [booking, setBooking] = useState(bookingDetails);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const validate = () => {
    const errors = {};

    if (booking.firstName.length === 0) {
      errors.firstName = "FirstName cannot be empty";
    }

    if (booking.phone.length < 9) {
      errors.phone = "Invalid phone number";
    }

    return errors;
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
      <form className={styles.container} onSubmit={handleSubmit}>
        <section className={styles.formSection}>
          <article className={styles.formOption}>
            <label htmlFor="firstName" className={styles.label}>
              First Name
            </label>
            <input
              type="text"
              id="booking-name"
              className={styles.input}
              value={booking.firstName}
              name="firstName"
              data-testid="bookingName"
              onChange={handleChange}
            />
            {errors.firstName && (
              <p style={{ color: "red" }}>{errors.firstName}</p>
            )}
          </article>
          <article className={styles.formOption}>
            <label htmlFor="lastName" className={styles.label}>
              Last Name
            </label>
            <input
              type="text"
              id="booking-name"
              className={styles.input}
              value={booking.lastName}
              name="lastName"
              data-testid="lastName"
              onChange={handleChange}
            />
            {errors.lastName && (
              <p style={{ color: "red" }}>{errors.lastName}</p>
            )}
          </article>
        </section>
        <section className={styles.formSection}>
          <article className={styles.formOption}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="booking-name"
              className={styles.input}
              value={booking.email}
              name="email"
              data-testid="email"
              onChange={handleChange}
            />
          </article>
          <article className={styles.formOption}>
            <label htmlFor="phone" className={styles.label}>
              Phone Number
            </label>
            <input
              type="text"
              id="booking-name"
              className={styles.input}
              value={booking.phone}
              name="phone"
              data-testid="phone"
              onChange={handleChange}
            />
            {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
          </article>
        </section>
        <section className={styles.formSectionWide}>
          <article className={styles.formOption}>
            <article className={styles.bookingDetail}>
              <FontAwesomeIcon
                icon={faChampagneGlasses}
                size="xl"
                color="white"
              />
              <label>{booking.occasion}</label>
            </article>

            <article className={styles.bookingDetail}>
              <FontAwesomeIcon icon={faCalendar} size="xl" color="white" />
              <label>{booking.bookingDate}</label>
            </article>

            <article className={styles.bookingDetail}>
              <FontAwesomeIcon icon={faClock} size="xl" color="white" />
              <label>{booking.bookingTime}</label>
            </article>
            <article className={styles.bookingDetail}>
              <FontAwesomeIcon icon={faPerson} size="xl" color="white" />
              <label>{booking.guestsCount}</label>
            </article>
          </article>
          <article className={styles.formOption}>
            <label htmlFor="special" className={styles.label}>
              Special Requests
            </label>
            <textarea
              id="special"
              className={styles.textarea}
              value={booking.special}
              name="special"
              onChange={handleChange}
              data-testid="special"
            ></textarea>
          </article>
        </section>

        <button type="submit" className={styles.reserve} aria-label="On Click">
          Confirm reservation
        </button>
      </form>
    </section>
  );
};
export default BookingDetails;
