import { configureStore } from "@reduxjs/toolkit"
/* importar los reducers */
import useReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    users: useReducer,
  },
});