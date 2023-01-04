// import { useState } from "react";

import Recipe from "../models/Recipes";
import RecipeItem from "../components/Recipes/RecipeItem";
import { Container, Row } from "react-bootstrap";

import classes from "./RecipeList.module.css";
// import RecipeDetails from "../components/Details/RecipeDetails";

// interface RecipeListProps {
//   items: Recipe[];
// }

const RecipeList: React.FC<{ items: Recipe[] }> = (props) => {
  // const [isEditing, setIsEditing] = useState(false);

  // const editHandler = () => {
  //   setIsEditing(true);
  //   console.log(isEditing);
  // };

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
          // <RecipeItem key={item.id} recipe={item} editHandler={editHandler} />
        ))}
      </Row>
    </Container>
  );
};

export default RecipeList;
