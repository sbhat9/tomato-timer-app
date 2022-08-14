import React from "react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hook";
import {
  selectMinutes,
  selectSeconds,
  setMinutes,
  setSeconds,
  setTime,
  resetTimer,
  startTimer,
  selectStatus,
  TimerStatus,
  pauseTimer,
} from "./timerSlice";

export default function TimerHook(props: {
  startingMinutes: number;
  startingSeconds: number;
}) {
  let { startingMinutes = 111, startingSeconds = 0 } = props;

  const seconds = useAppSelector(selectSeconds);
  const minutes = useAppSelector(selectMinutes);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMinutes(startingMinutes));
    dispatch(setSeconds(10));
  }, [startingMinutes, startingSeconds]);

  useEffect(() => {
    let interval: NodeJS.Timeout | string | number | undefined;
    if (status === TimerStatus.STARTED) {
      interval = setInterval(() => {
        if (seconds > 0) {
          dispatch(setSeconds(seconds - 1));
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            const time = { minutes: minutes - 1, seconds: 59 };
            dispatch(setTime(time));
          }
        }
      }, 1000);
    } else if (status === TimerStatus.PAUSED) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    document.title = `${minutes}:${seconds}`;
  }, [minutes, seconds]);

  const onStart = () => {
    dispatch(startTimer());
  };
  const onReset = () => {
    const time = { minutes: startingMinutes, seconds: startingSeconds };
    dispatch(resetTimer(time));
  };

  const onPause = () => {
    dispatch(pauseTimer());
  };

  return { minutes, seconds, onStart, onReset, onPause, status };
}
