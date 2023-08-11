import { createSlice } from "@reduxjs/toolkit";

/*This is the equivalent to:
const [counter, setCounter] = useState(0);
*/

const initialState = {
  counter: 30,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer
