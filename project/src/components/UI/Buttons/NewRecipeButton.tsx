import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import classes from "../../Nav/Navbar.module.css";

function NewRecipeButton() {
  return (
    <Link to={"/new-recipe"}>
      <Button variant="outline-light" className={classes.button}>
        Add Recipe
      </Button>
    </Link>
  );
}

export default NewRecipeButton;
