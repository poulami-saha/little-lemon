import BookingForm from "../components/BookingForm";
import styles from "./Booking.module.css";
import { useReducer, useEffect, useState } from "react";
import { updateTimes, initialState } from "../store/reducer";
import { useNavigate } from "react-router-dom";
import BookingInfo from "../components/BookingInfo";
import { defaultBookingState } from "../model/defaultBooking";

const Booking = () => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const [state, dispatch] = useReducer(updateTimes, initialState);

  const navigate = useNavigate();

  const submitForm = (booking) => {
    if (typeof window.submitAPI === "function") {
      const response = window.submitAPI(booking);
      if (response) {
        navigate("/confirmation", { state: booking });
      }
    }
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
      <BookingInfo task="Find a table for any occasion" />
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
        onSubmit={submitForm}
        handleBookingDate={handleBookingDate}
        isEditable={true}
        bookingDetails={defaultBookingState}
      />
    </section>
  );
};
export default Booking;
