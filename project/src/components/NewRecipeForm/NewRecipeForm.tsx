import { Button, Form } from "react-bootstrap";
import classes from "./NewRecipeForm.module.css";
import { recipes } from "../../models/Recipes";
import React from "react";

const NewRecipeForm = () => {
  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = e.currentTarget.value;
    return newImage;
    // return console.log(newImage);
  };

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.currentTarget.value;
    return newTitle;
  };

  const ingredientsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIngredients = e.currentTarget.value;
    return newIngredients;
  };

  // const blurHandler = (newImage: string) =>{
  //     saveRecipeHandler(newImage);
  // }

  const saveRecipeHandler = (
    newImage: string,
    newTitle: string,
    newIngredients: string[]
  ) => {
    // const newImageAddress = newImage.target.value;
    const newTitleName = newTitle;
    const newIngredientList = newIngredients;

    console.log(newImage);
    console.log(newTitleName);
    console.log(newIngredientList);

    recipes.push();
  };

  return (
    <Form className={classes.form}>
      <Form.Group className="mb-3" controlId="formGroupImage">
        <Form.Label className={classes["form-label"]}>Image Link:</Form.Label>
        <Form.Control
          onChange={imageChangeHandler}
          onBlur={()=>saveRecipeHandler}
          type="text"
          placeholder="www.something.com/recipe/image"
          className={classes["form-input"]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Label className={classes["form-label"]}>Title:</Form.Label>
        <Form.Control
          onChange={titleChangeHandler}
          onBlur={() => saveRecipeHandler}
          type="title"
          placeholder="Mashed Potato"
          className={classes["form-input"]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupIngredients">
        <Form.Label className={classes["form-label"]}>Ingredients:</Form.Label>
        <Form.Control
          onChange={ingredientsChangeHandler}
          onBlur={() => saveRecipeHandler}
          as="textarea"
          rows={5}
          type="ingredients"
          placeholder="Potatoes, onions, garlic, ..."
          className={classes["form-input"]}
        />
      </Form.Group>
      <Button
        variant="outline-light"
        className={classes.button}
        // onSubmit={saveRecipeHandler}
      >
        Save
      </Button>
      <Button variant="outline-light" className={classes.button}>
        Cancel
      </Button>
    </Form>
  );
};

export default NewRecipeForm;
