import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Body from "./Body";
import styled from "@emotion/styled";

const StyledContainer = styled(Container)`
  background-color: #941b2b;
  height: 100vh;
  color: white;
`;
function Layout() {
  return (
    <StyledContainer fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Body />
      </Row>
    </StyledContainer>
  );
}

export default Layout;
