import { createSlice } from "@reduxjs/toolkit";

import { recipes } from "../models/Recipes";

const initialNewRecipeState = {
  newId: "",
  newName: "",
  newImg: "",
  newIngr: [""],
};

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
      const newData = action.payload;
      const newSeparate = newData.split(/[,]+/);
      state.newIngr = newSeparate;
    },
    handleSubmit(state, action) {
      state.newId = action.payload;
      recipes.push({
        id: state.newId,
        img: state.newImg,
        recipeName: state.newName,
        ingredients: [...state.newIngr],
      });
    },
  },
});

export const newRecipeActions = newRecipeSlice.actions;

export default newRecipeSlice;
