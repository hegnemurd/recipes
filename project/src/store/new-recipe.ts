import { createSlice } from "@reduxjs/toolkit";

import { recipes } from "../models/Recipes";

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
      state.newIngr = action.payload.split(/[,]+/);
    },
    handleSubmit(state) {
      // state.newId = Math.floor(Math.random() * 1000000).toString();
      state.newId = "23";
      recipes.push({
        id: state.newId,
        img: state.newImg,
        recipeName: state.newName,
        ingredients: state.newIngr,
      });
    }
  },
});

export const newRecipeActions = newRecipeSlice.actions;

export default newRecipeSlice;
