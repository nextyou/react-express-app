import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;
export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
export type StoreGetState = typeof store.getState;
