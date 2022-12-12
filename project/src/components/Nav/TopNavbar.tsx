import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import classes from "./TopNavbar.module.css";

function TopNavbar() {
  return (
    <Navbar className={classes.NavBar} fixed="top">
      <Container>
        <Navbar.Brand className={classes["navbar-brand"]}>Recipes</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
