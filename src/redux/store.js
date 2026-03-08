
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import slotReducer from "./slotSlice";

export const store = configureStore({
  reducer:{
    auth:authReducer,
    slots:slotReducer
  }
});
