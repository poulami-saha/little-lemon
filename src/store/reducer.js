const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const initialState = {
  availableTimes: initializeTimes(),
};

function updateTimes(state, action) {
  return { ...state, availableTimes: initializeTimes() };
}

export { updateTimes, initialState };
