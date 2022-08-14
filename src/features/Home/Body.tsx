import { Container, Nav, Card } from "react-bootstrap";
import styled from "@emotion/styled";
import Timer from "../Timer";
import FocusTab from "./FocusTab";

const StyledContainer = styled(Container)`
  max-width: 620px;
  border: 1px;
  margin-top: 20px;
`;
const StyledCard = styled(Card)`
  background-color: #b53142;
  a {
    color: white;
  }
`;
function Body() {
  return (
    <StyledContainer fluid>
      <StyledCard>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#home">Focus task</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#shortBreak">Short break</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#longBreak">Long break</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <FocusTab />
        </Card.Body>
      </StyledCard>
    </StyledContainer>
  );
}

export default Body;
