import { Container, Row, Col } from "react-bootstrap";
import StartButton from "./StartButton";
import ResetButton from "./ResetButton";
import { TimerStatus } from "../timerSlice";
export default function TaskControlBar(props: {
  onStart: Function;
  onReset: Function;
  onPause: Function;
  status: TimerStatus;
}) {
  const { onStart, onReset, status, onPause } = props;

  return (
    <Container>
      <Row>
        <Col lg="8">
          <StartButton onStart={onStart} onPause={onPause} status={status} />
        </Col>
        <Col lg="3" style={{ float: "right" }}>
          <ResetButton onReset={onReset} />
        </Col>
      </Row>
    </Container>
  );
}
