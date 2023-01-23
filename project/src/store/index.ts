import { configureStore } from "@reduxjs/toolkit";

import newRecipeSlice from "./new-recipe";

const store = configureStore({
  reducer: { newRecipe: newRecipeSlice.reducer },
});

export default store;
