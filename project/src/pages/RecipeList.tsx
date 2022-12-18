import Recipe from "../models/Recipes";
import RecipeItem from "../components/Recipes/RecipeItem";
import { Container, Row } from "react-bootstrap";

import classes from "./RecipeList.module.css";

const RecipeList: React.FC<{ items: Recipe[] }> = (props) => {
  return (
    <Container className={classes.container}>
      <Row className={`flex-row gap-3 ${classes.row}`}>
        {props.items.map((item: Recipe) => (
          <RecipeItem
            key={item.id}
            id={item.id}
            img={item.img}
            recipeName={item.recipeName}
            ingredients={item.ingredients}
          />
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
