import { updateTimes, initialState } from "./reducer";

describe("updateTimes", () => {
  it("should return the initial state", () => {
    expect(updateTimes(undefined, {})).toEqual(initialState);
  });

  it("should handle booking date", () => {
    expect(updateTimes(initialState, { bookingDate: "22/07/2012" })).toEqual(
      initialState
    );
  });
});
