import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TimerState {
  minutes: number;
  seconds: number;
  status: TimerStatus;
}

export enum TimerStatus {
  STARTED = "started",
  PAUSED = "paused",
  INITIAL = "initial",
}

const initialState: TimerState = {
  minutes: 0,
  seconds: 0,
  status: TimerStatus.INITIAL,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
    },
    setSeconds: (state, action: PayloadAction<number>) => {
      state.seconds = action.payload;
    },
    setTime: (
      state,
      action: PayloadAction<{ minutes: number; seconds: number }>
    ) => {
      state.seconds = action.payload.seconds;
      state.minutes = action.payload.minutes;
    },
    resetTimer: (
      state,
      action: PayloadAction<{ minutes: number; seconds: number }>
    ) => {
      state.seconds = action.payload.seconds;
      state.minutes = action.payload.minutes;
      state.status = TimerStatus.INITIAL;
    },
    startTimer: (state) => {
      state.status = TimerStatus.STARTED;
    },
    pauseTimer: (state) => {
      state.status = TimerStatus.PAUSED;
    },
  },
});

export const {
  setMinutes,
  setSeconds,
  setTime,
  startTimer,
  resetTimer,
  pauseTimer,
} = timerSlice.actions;

export const selectMinutes = (state: RootState) => state.timer.minutes;
export const selectSeconds = (state: RootState) => state.timer.seconds;
export const selectStatus = (state: RootState) => state.timer.status;

export default timerSlice.reducer;
