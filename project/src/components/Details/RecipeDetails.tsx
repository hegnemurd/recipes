import { Col, Container, Row } from "react-bootstrap";
import Recipe from "../../models/Recipes";
import classes from "./RecipeDetails.module.css";

const RecipeDetails = (props: Recipe) => {
  return (
    <Container className={classes.container} fluid="md">
      <Row>
        <Col>
          <img alt="recipe" src={props.img} className={classes.img} />
          <h2>{props.recipeName}</h2>
        </Col>
        <Col className={classes.col}>
          <ul>
            {props.ingredients.map((ingredient: any) => (
              <li key={ingredient} className={classes.li}>
                {ingredient}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetails;
