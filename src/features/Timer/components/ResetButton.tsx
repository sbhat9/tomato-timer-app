import { Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { StyledButtonContent, StyledButtonText } from "./common";
import { VscDebugRestart } from "react-icons/vsc";

export default function ResetButton(props: { onReset: Function }) {
  const { onReset } = props;
  return (
    <Button variant="light" onClick={() => onReset()}>
      <StyledButtonContent>
        <IconContext.Provider
          value={{ color: "#b53142", className: "global-class-name" }}
        >
          <VscDebugRestart size="2rem" color="#b53142" />
        </IconContext.Provider>
        <StyledButtonText>Reset</StyledButtonText>{" "}
      </StyledButtonContent>
    </Button>
  );
}
