import { Link, useLocation } from "react-router-dom";
import NewRecipeButton from "../UI/Buttons/NewRecipeButton";

import { Navbar, Container } from "react-bootstrap";
import classes from "./Navbar.module.css";

function TopNavbar() {
  const location = useLocation();
  const isNewRecipePage = location.pathname.includes("/new-recipe");

  return (
    <Navbar className={classes.NavBar} fixed="top">
      <Container>
        <Navbar.Brand className={classes["navbar-brand"]} as={Link} to="/">
          Recipes
        </Navbar.Brand>
        {!isNewRecipePage && <NewRecipeButton />}
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
