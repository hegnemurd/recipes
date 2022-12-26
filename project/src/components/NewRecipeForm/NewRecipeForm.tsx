import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
// import Recipe from "../../models/Recipes";
import classes from "./NewRecipeForm.module.css";

// type NewRecipe = {
//   id?: string;
//   img?: string;
//   recipeName?: string;
//   ingredients?: string[];
// };

const NewRecipeForm = () => {
  //   const [newRecipes, setNewRecipe] = useState<Recipe>();
  const [enteredId, setEnteredId] = useState("");
  const [enteredImg, setEnteredImg] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState([""]);

  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredId(e.currentTarget.value);
    // return newId;
    // return (newRecipes.id = newId);
  };

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredImg(e.currentTarget.value);
    // return newImage;
    // return (newRecipe.img = newImage);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.currentTarget.value);
    // return newName;
    // return (newRecipe.recipeName = newName);
  };

  const ingredientsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIngredients = e.currentTarget.value;
    const newIngArray = newIngredients.split(/[ ,]+/);
    setEnteredIngredients(newIngArray);
    // return newIngArray;
    // return (newRecipe.ingredients = newIngArray);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(enteredId, enteredImg, enteredName, enteredIngredients);
  };

  return (
    <Form className={classes.form} onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Label className={classes["form-label"]}>Id:</Form.Label>
        <Form.Control
          onChange={idChangeHandler}
          type="id"
          placeholder="recipe name as id"
          className={classes["form-input"]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupImage">
        <Form.Label className={classes["form-label"]}>Image Link:</Form.Label>
        <Form.Control
          onChange={imageChangeHandler}
          type="text"
          placeholder="www.something.com/recipe/image"
          className={classes["form-input"]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label className={classes["form-label"]}>Title:</Form.Label>
        <Form.Control
          onChange={nameChangeHandler}
          type="name"
          placeholder="Mashed Potato"
          className={classes["form-input"]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupIngredients">
        <Form.Label className={classes["form-label"]}>Ingredients:</Form.Label>
        <Form.Control
          onChange={ingredientsChangeHandler}
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
        type="submit"
        // onSubmit={onSubmitHandler}
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
