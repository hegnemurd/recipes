import { createSlice } from "@reduxjs/toolkit";

const initialEditRecipeState = {
  editedId: "",
  editedName: "",
  editedImg: "",
  editedIngr: [""],
};

const editRecipeSlice = createSlice({
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
    //   props.editedRecipeData(
    //     state.editedId,
    //     state.editedImg,
    //     state.editedName,
    //     state.editedIngr
    //   );
    },
  },
});

export const editRecipeActions = editRecipeSlice.actions;

export default editRecipeSlice;
