import thread from "@/store/slices/threads";
import userSlice from "@/store/slices/user";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    thread,
    userSlice,
  },
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
