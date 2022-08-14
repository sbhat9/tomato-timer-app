import Button from "react-bootstrap/Button";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styled from "@emotion/styled";
import focus from "../../images/focus.svg";

const StyledNavBar = styled(Navbar)`
  background-color: #690916;
  a {
    color: white !important;
  }
`;
function Header() {
  return (
    <StyledNavBar>
      <Navbar.Brand href="#home">
        <h5>
          <img
            src={focus}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Focus Timer
        </h5>
      </Navbar.Brand>
    </StyledNavBar>
  );
}

export default Header;
