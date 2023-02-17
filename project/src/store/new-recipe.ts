import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { recipes } from "../models/Recipes";

const initialNewRecipeState = {
  newId: "",
  newName: "",
  newImg: "",
  newIngr: [""],
};

// const pushNewRecipes = createAsyncThunk("")

// const thunkActionCreator = (recipeData) => (dispatch, getState) => {
//   dispatch(someResult())
// }
// dispatch(thunkActionCreator)

// const fetchRecipes = createAsyncThunk("recipes/fetch", async () => {
//   const response = await fetch("../models/Recipes");
//   const data = await response.json();
//   return data;
// });

// const addNewRecipe = recipeData => dispatch => {
//   setTimeout(() => {
//     dispatch(handleSubmit(recipeData))
//   }, 3000)
// }

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
      // state.newIngr = action.payload.split(/[,]+/);
    },
    handleSubmit(state, action) {
      state.newId = action.payload;
      // const newRecipesArray = [...recipes];
      recipes.push({
        id: state.newId,
        img: state.newImg,
        recipeName: state.newName,
        ingredients: state.newIngr,
      });
    },
  },
});

export const newRecipeActions = newRecipeSlice.actions;

export default newRecipeSlice;
