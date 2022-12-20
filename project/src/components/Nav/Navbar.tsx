import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import classes from "./Navbar.module.css";

function TopNavbar() {
  return (
    <Navbar className={classes.NavBar} fixed="top">
      <Container>
        <Navbar.Brand className={classes["navbar-brand"]} as={Link} to="/">
          Recipes
        </Navbar.Brand>
        <Link to={"/new-recipe"}>
          <Button variant="outline-light" className={classes.button}>
            Add Recipe
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
