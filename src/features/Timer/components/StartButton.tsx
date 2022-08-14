import { useMemo } from "react";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { VscDebugStart } from "react-icons/vsc";
import { TimerStatus } from "../timerSlice";
import { StyledButtonContent, StyledButtonText } from "./common";

export default function StatPauseBtn(props: {
  onStart: Function;
  onPause: Function;
  status: TimerStatus;
}) {
  const { onStart, status, onPause } = props;
  const text = useMemo(() => {
    let txt = "Start";
    if (status === TimerStatus.PAUSED) txt = "Restart";
    if (status === TimerStatus.STARTED) txt = "Pause";
    return txt;
  }, [status]);

  const onAction = () => {
    if (status === TimerStatus.STARTED) onPause();
    else onStart();
  };
  return (
    <Button variant="light" onClick={onAction}>
      <StyledButtonContent>
        <IconContext.Provider
          value={{ color: "#b53142", className: "global-class-name" }}
        >
          <VscDebugStart size="2rem" />
        </IconContext.Provider>
        <StyledButtonText>{text}</StyledButtonText>{" "}
      </StyledButtonContent>
    </Button>
  );
}
