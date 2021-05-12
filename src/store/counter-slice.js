import { createSlice } from "@reduxjs/toolkit";

const intialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: intialCounterState,
  reducers: {
    increament(state) {
      state.counter++;
    },
    decreament(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;