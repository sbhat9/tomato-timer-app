import Clock from "./components/Clock";
import TaskControlBar from "./components/TaskControls";
import TimerHook from "./TimerHook";

export default function Timer(props: {
  startingMinutes: number;
  startingSeconds: number;
}) {
  const { minutes, seconds, onStart, onReset, status, onPause } =
    TimerHook(props);
  return (
    <>
      <Clock minutes={minutes} seconds={seconds} />
      <TaskControlBar
        onStart={onStart}
        onReset={onReset}
        status={status}
        onPause={onPause}
      />
    </>
  );
}
