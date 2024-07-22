import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders form fields and submits data", async () => {
  const handleSubmit = jest.fn();
  const dummyTimes = ["17:00"];
  render(
    <BookingForm
      availableTimes={dummyTimes}
      dispatch={jest.fn()}
      onSubmit={handleSubmit}
    />
  );

  // Check if form fields are rendered
  const chooseDate = screen.getByText("Choose date");
  const chooseTime = screen.getByText("Choose time");
  const guestsCount = screen.getByText("Number of guests");
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
  fireEvent.change(chooseDateInput, { target: { value: "2022-07-10" } });
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
    bookingDate: "2022-07-10",
    bookingTime: "17:00",
    guestsCount: "2",
    occasion: "Birthday",
  };

  // Check console log for submitted data
  expect(handleSubmit).toHaveBeenCalledWith(expected);
});
