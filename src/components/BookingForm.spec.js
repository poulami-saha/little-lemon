import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { defaultBookingState } from "../model/defaultBooking";

test("renders form fields and submits data", async () => {
  const handleSubmit = jest.fn();
  const dummyTimes = ["17:00"];
  render(
    <BookingForm
      availableTimes={dummyTimes}
      dispatch={jest.fn()}
      onSubmit={handleSubmit}
      isEditable={true}
      handleBookingDate={jest.fn()}
      bookingDetails={defaultBookingState}
    />
  );

  // Check if form fields are rendered
  const chooseDate = screen.getByText("Date");
  const chooseTime = screen.getByText("Choose time");
  const guestsCount = screen.getByText("Number of Diners");
  const occasion = screen.getByText("Occasion");
  const submitButton = screen.getByText("Make your reservation");

  const selectors = [
    chooseDate,
    chooseTime,
    guestsCount,
    occasion,
    submitButton,
  ];
  selectors.map((selector) => expect(selector).toBeInTheDocument());

  const chooseDateInput = screen.getByTestId("bookingDate");
  const chooseTimeInput = screen.getByTestId("bookingTime");
  const guestsCountInput = screen.getByTestId("guests");
  const occasionInput = screen.getByTestId("occasion");

  // Simulate user input
  fireEvent.change(chooseDateInput, { target: { value: "2027-07-10" } });
  fireEvent.change(chooseTimeInput, { target: { value: "17:00" } });
  fireEvent.change(guestsCountInput, {
    target: { value: 2 },
  });
  fireEvent.change(occasionInput, {
    target: { value: "Birthday" },
  });

  // Simulate form submission
  fireEvent.click(submitButton);

  const expected = {
    bookingDate: "2027-07-10",
    bookingTime: "17:00",
    guestsCount: "2",
    occasion: "Birthday",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    special: "",
    seating: "indoor",
  };

  // Check console log for submitted data
  expect(handleSubmit).toHaveBeenCalledWith(expected);
});

test("render form validation errors", async () => {
  const handleSubmit = jest.fn();
  const dummyTimes = ["18:00"];
  render(
    <BookingForm
      availableTimes={dummyTimes}
      dispatch={jest.fn()}
      onSubmit={handleSubmit}
      isEditable={true}
      handleBookingDate={jest.fn()}
      bookingDetails={defaultBookingState}
    />
  );

  const chooseDateInput = screen.getByTestId("bookingDate");
  const chooseTimeInput = screen.getByTestId("bookingTime");
  const guestsCountInput = screen.getByTestId("guests");
  const occasionInput = screen.getByTestId("occasion");
  const submitButton = screen.getByText("Make your reservation");

  // Simulate user input
  fireEvent.change(chooseDateInput, { target: { value: "2021-07-10" } });
  fireEvent.change(chooseTimeInput, { target: { value: "17:00" } });
  fireEvent.change(guestsCountInput, {
    target: { value: 0 },
  });
  fireEvent.change(occasionInput, {
    target: { value: "Birthday" },
  });

  // Simulate form submission
  fireEvent.click(submitButton);

  const dateError = screen.getByText("Booking cannot be made for past date");
  const timeError = screen.getByText("Cannot book for the time selected");
  const countError = screen.getByText("Minimum 1 guest to book a table");

  // Check console log for submitted data
  expect(handleSubmit).not.toHaveBeenCalled();
  [dateError, timeError, countError].map((error) =>
    expect(error).toBeInTheDocument()
  );
});
