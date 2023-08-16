import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
import { recipes } from "../models/Recipes";
// import { useParams } from "react-router";
// import { useDispatch } from "react-redux";

const initialEditRecipeState = {
  editedId: "",
  editedName: "",
  editedImg: "",
  editedIngr: [""],
};

const editRecipeSlice = createSlice({
  // const dispatch = useDispatch();

  // const params = useParams();
  // const { recipeId } = params;

  name: "editRecipe",
  initialState: initialEditRecipeState,
  reducers: {
    editedImg(state, action) {
      state.editedImg = action.payload;
    },
    editedName(state, action) {
      state.editedName = action.payload;
    },
    editedIngr(state, action) {
      const editedData = action.payload;
      const editedArray = editedData.split(/[,]+/);
      state.editedIngr = editedArray;
    },
    handleSubmit(state, action) {
      state.editedId = action.payload;
      const recipe = recipes.find((r) => r.id === state.editedId);
      if (recipe != null) {
        recipe.img = state.editedImg;
        recipe.recipeName = state.editedName;
        recipe.ingredients = [...state.editedIngr];
        console.log(recipe);
      } else {
        throw new Error("Recipe not found");
      }
    },
  },
});

export const editRecipeActions = editRecipeSlice.actions;

export default editRecipeSlice;
