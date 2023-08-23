import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { Col, Container, Row } from "react-bootstrap";
import Recipe from "../../models/Recipes";
// import classes from "./RecipeDetails.module.css";

const RecipeDetails = (props: Recipe) => {
  return (
    //   <Container className={classes.container} fluid="md">
    //     <Row>
    //       <Col>
    //         <img alt="recipe" src={props.img} className={classes.img} />
    //         <h2>{props.recipeName}</h2>
    //       </Col>
    //       <Col className={classes.col}>
    //         <ul>
    //           {props.ingredients.map((ingredient: any) => (
    //             <li key={ingredient} className={classes.li}>
    //               {ingredient}
    //             </li>
    //           ))}
    //         </ul>
    //       </Col>
    //     </Row>
    //   </Container>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.img}
        title={props.recipeName}
      />
      <CardContent>
        <Typography id="recName" gutterBottom variant="h2" component="div">
          {props.recipeName}
        </Typography>
        <Typography id="ingList" component="div">
          <ul>
            {props.ingredients.map((ingredient: any) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default RecipeDetails;
