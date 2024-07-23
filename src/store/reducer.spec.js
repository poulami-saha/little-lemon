import { updateTimes, initialState } from "./reducer";

describe("updateTimes", () => {
  it("should return new set if available times when date is changed", () => {
    expect(updateTimes(initialState, { bookingDate: "22/07/2012" })).toEqual(
      initialState
    );
  });
});
