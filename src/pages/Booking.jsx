import BookingForm from "../components/BookingForm";
import styles from "./Booking.module.css";
import { useReducer, useEffect, useState } from "react";
import { updateTimes, initialState } from "../store/reducer";
import { useNavigate } from "react-router-dom";
import { defaultBookingState } from "../model/defaultBooking";
import restaurant from "../assets/restaurant.jpg";
import restaurantChef from "../assets/restaurant chef B.jpg";
import restaurantFood from "../assets/restauranfood.jpg";

const Booking = () => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();

  const submitForm = (booking) => {
    navigate("/confirmation", {
      state: booking,
    });
  };

  const handleBookingDate = (date) => {
    setBookingDate(new Date(date));
  };

  useEffect(() => {
    // Function to load the external script
    const loadScript = () => {
      // Create a script element
      const script = document.createElement("script");
      script.src = `${process.env.PUBLIC_URL}/externalScript.js`;
      script.async = true;

      // Append the script to the document body
      document.body.appendChild(script);

      // Set up event listeners for script load and error
      script.onload = () => {
        setScriptLoaded(true);
        console.log("Script loaded successfully");
      };
      script.onerror = () => console.error("Error loading external script");
    };

    // Load the script on component mount
    loadScript();

    // Cleanup on component unmount
    return () => {
      const existingScript = document.querySelector(
        'script[src$="externalScript.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    if (scriptLoaded && bookingDate !== null) {
      if (typeof window.fetchAPI === "function") {
        dispatch({ type: "FETCH_INIT" });
        const response = window.fetchAPI(bookingDate);
        dispatch({ type: "FETCH_SUCCESS", payload: response });
      } else {
        dispatch({ type: "FETCH_FAILURE", payload: "fetchAPI is not defined" });
        console.error("fetchAPI is not defined");
      }
    }
  }, [scriptLoaded, bookingDate]);

  return (
    <section className={styles.reservation}>
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
        onSubmit={submitForm}
        handleBookingDate={handleBookingDate}
        isEditable={true}
        bookingDetails={defaultBookingState}
      />
      <div className={styles.images}>
        <img src={restaurant} className={styles.image} alt="" />
        <img src={restaurantChef} className={styles.image} alt="" />
        <img src={restaurantFood} className={styles.image} alt="" />
      </div>
    </section>
  );
};
export default Booking;
