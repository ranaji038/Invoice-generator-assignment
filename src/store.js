import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/RootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
