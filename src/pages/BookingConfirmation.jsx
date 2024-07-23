import BookingForm from "../components/BookingForm";
import BookingInfo from "../components/BookingInfo";
import styles from "./Booking.module.css";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const booking = location.state || {};

  return (
    <section className={styles.reservation}>
      <BookingInfo task="Booking Confirmation" />
      <BookingForm isEditable={false} bookingDetails={booking} />
    </section>
  );
};
export default BookingConfirmation;
