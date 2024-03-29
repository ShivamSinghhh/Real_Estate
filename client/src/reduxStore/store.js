import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"

export const store = configureStore({
  reducer: {user:userReducer},
  middleware: (getMiddleware) =>{
    return getMiddleware({
      serializableCheck: false,
    })}
});
