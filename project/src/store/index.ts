import { configureStore } from "@reduxjs/toolkit";
import newRecipeSlice from "./new-recipe";
import editRecipeSlice from "./edit-recipe";

const store = configureStore({
  reducer: {
    newRecipe: newRecipeSlice.reducer,
    editRecipe: editRecipeSlice.reducer,
  },
});

export default store;
