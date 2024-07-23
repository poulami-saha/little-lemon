import BookingDetails from "../components/BookingDetails";
import { useEffect, useState } from "react";
import styles from "./Booking.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state || {};
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const submitForm = (booking) => {
    if (scriptLoaded && typeof window.submitAPI === "function") {
      const response = window.submitAPI(booking);
      if (response) {
        console.log("Form submitted");
        alert("Booking Submitted");
        navigate("/");
      }
    }
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

  return (
    <section className={styles.reservation}>
      <BookingDetails bookingDetails={booking} onSubmit={submitForm} />
    </section>
  );
};
export default BookingConfirmation;
