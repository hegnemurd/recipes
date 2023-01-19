import { configureStore } from "@reduxjs/toolkit";

import newReducer from "./new";

const store = configureStore({
  reducer: { new: newReducer },
});

export default store;
