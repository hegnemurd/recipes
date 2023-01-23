import { createSlice } from "@reduxjs/toolkit";

const initialNewRecipeState = { newId: "", newName: "", newImg: "", newIngr: [""] };

const newRecipeSlice = createSlice({
  name: "newRecipe",
  initialState: initialNewRecipeState,
  reducers: {
    newImage(state, action) {
      state.newImg = action.payload;
    },
    newName(state, action) {
      state.newName = action.payload;
    },
    newIngr(state, action) {
      const newIngredients = action.payload;
      const newIngArray = newIngredients.split(/[,]+/);
      state.newIngr = newIngArray;
    },
    handleSubmit(state) {
    const uniqueId = Math.floor(Math.random() * 1000000).toString();
    state.newId = uniqueId;
    }
  },
});

export const newRecipeActions = newRecipeSlice.actions;

export default newRecipeSlice;
