import { Container } from "react-bootstrap";
import styled from "@emotion/styled";

const StyledContainer = styled(Container)`
  max-width: 620px;
  min-height: 300px;
  border: 1px;
  font-size: 10rem;
  text-align: center;
`;

export default function Clock(props: { minutes: number; seconds: number }) {
  const { minutes, seconds } = props;
  return (
    <StyledContainer>
      <p>
        {" "}
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </StyledContainer>
  );
}
