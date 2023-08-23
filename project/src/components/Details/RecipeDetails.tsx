import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { Col, Container, Row } from "react-bootstrap";
import Recipe from "../../models/Recipes";
import { Box, Grid } from "@mui/material";
import { Container } from "react-bootstrap";
// import classes from "./RecipeDetails.module.css";

const RecipeDetails = (props: Recipe) => {
  return (
      // <Container className={classes.container} fluid="md">
      //   <Row>
      //     <Col>
      //       <img alt="recipe" src={props.img} className={classes.img} />
      //       <h2>{props.recipeName}</h2>
      //     </Col>
      //     <Col className={classes.col}>
      //       <ul>
      //         {props.ingredients.map((ingredient: any) => (
      //           <li key={ingredient} className={classes.li}>
      //             {ingredient}
      //           </li>
      //         ))}
      //       </ul>
      //     </Col>
      //   </Row>
      // </Container>


    <Container>
      <Grid
        container
        // justifyContent="center"
        // alignItems="center"
        // alignSelf="center"
        // alignContent="center"
        display="flex"
        // flexDirection="row"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "94vh" }}
      >
        <Grid item>
          <Card sx={{  maxHeight: 500, maxWidth: "800", boxShadow: "10" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia
                sx={{ height: 500, width: 800 }}
                image={props.img}
                title={props.recipeName}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent>
                  <Typography
                    id="recName"
                    gutterBottom
                    variant="h2"
                    component="div"
                  >
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
                <CardActions sx={{justifyContent: "center", alignContent: "end"}}>
                  <Button size="small">Details</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RecipeDetails;
