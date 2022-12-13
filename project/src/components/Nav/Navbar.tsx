import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Navbar.module.css";

function TopNavbar() {
  return (
    <Navbar className={classes.NavBar} fixed="top">
      <Container>
        <Navbar.Brand className={classes["navbar-brand"]} as={Link} to="/">
          Recipes
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
