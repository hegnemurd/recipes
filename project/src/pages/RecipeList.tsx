import { useState } from "react";

import Recipe from "../models/Recipes";
import RecipeItem from "../components/Recipes/RecipeItem";
import { Container, Row } from "react-bootstrap";

import classes from "./RecipeList.module.css";

interface RecipeListProps {
  items: Recipe[];
}

const RecipeList = (props: RecipeListProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    setIsEditing(true);
    console.log(isEditing);
  };

  return (
    <Container className={classes.container}>
      <Row className={`flex-row gap-3 ${classes.row}`}>
        {props.items.map((item) => (
          <RecipeItem key={item.id} recipe={item} editHandler={editHandler} />
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
