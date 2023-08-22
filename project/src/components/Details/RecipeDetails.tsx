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

const styles = (theme: any) => ({
  root: {
    [theme.breakpoints.up("xs")]: {
      maxWidth: "300",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "800",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1000",
      maxHeight: "700",
    },
  },
});

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

    // <Root>
    <Container>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "94vh" }}
      >
        <Grid item>
          <Card
            sx={{
              maxHeight: 500,
              maxWidth: "800",
              boxShadow: "10",
              // border: "3px solid #ae45ff",
              borderRadius: "20px",
            }}
          >
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
                <CardActions
                  sx={{ justifyContent: "center", alignContent: "end" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#ae45ff",
                      border: "1px solid #ae45ff",
                      fontWeight: "600",
                    }}
                  >
                    Back
                  </Button>
                </CardActions>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
    // </Root>
  );
};

export default RecipeDetails;
