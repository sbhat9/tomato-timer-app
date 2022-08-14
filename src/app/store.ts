import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import timerReducer from "../features/Timer/timerSlice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
