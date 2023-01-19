import { createSlice } from "@reduxjs/toolkit";

const initialNewRecipeState = { name: "", img: "", ingr: "", showCounter: true };

const newSlice = createSlice({
  name: "newRecipe",
  initialState: initialNewRecipeState,
  reducers: {
    // increment(state) {
    //   state.name++;
    // },
    // decrement(state) {
    //   state.counter--;
    // },
    // increase(state, action) {
    //   state.counter = state.counter + action.payload;
    // },
    // toggleCounter(state) {
    //   state.showCounter = !state.showCounter;
    // },
  },
});

export const counterActions = newSlice.actions;

export default newSlice.reducer;