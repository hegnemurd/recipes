import React, { useState } from "react";

import Recipe from "../../models/Recipes";
import { Button, Form } from "react-bootstrap";
import classes from "./NewRecipeForm.module.css";

type NewRecipe = {
  id?: string;
  img?: string;
  recipeName?: string;
  ingredients?: string[];
};

const NewRecipeForm = () => {
  const [newRecipes, setNewRecipe] = useState<NewRecipe[]>([]);

  const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newId = e.currentTarget.value;
    return newId;
    // return (newRecipe.id = newId);
  };

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newImage = e.currentTarget.value;
    return newImage;
    // return (newRecipe.img = newImage);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.currentTarget.value;
    return newName;
    // return (newRecipe.recipeName = newName);
  };

  const ingredientsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIngredients = e.currentTarget.value;
    const newIngArray = newIngredients.split(/[ ,]+/);
    return newIngArray;
    // return (newRecipe.ingredients = newIngArray);
  };

  const saveRecipeHandler = (
    newRecipe: Recipe,
    newId: string,
    newImage: string,
    newName: string,
    newIngArray: string[]
  ) => {
    setNewRecipe((newRecipes) => [
      ...newRecipes,
      {
        id: newId,
        recipeImg: newImage,
        recipeName: newName,
        ingredents: newIngArray,
      },
    ]);
    return newRecipe;
  };

  // const blurHandler = (newImage: string) =>{
  //     saveRecipeHandler(newImage);
  // }

  // const saveRecipeHandler = (
  //   newImage: any,
  //   newTitle: string,
  //   newIngredients: string[]
  // ) => {
  // const newImageAddress = newImage.target.value;
  // const newTitleName = newTitle;
  // const newIngredientList = newIngredients;

  //  return console.log(newImage);
  // return console.log(newImageAddress);
  //  console.log(newTitleName);
  //     console.log(newIngredientList);

  //     recipes.push();
  // };

  return (
    <Form className={classes.form} onSubmit={saveRecipeHandler}>
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Label className={classes["form-label"]}>Id:</Form.Label>
        <Form.Control
          onChange={idChangeHandler}
          // onBlur={() => saveRecipeHandler}
          type="id"
          placeholder="recipe name as id"
          className={classes["form-input"]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupImage">
        <Form.Label className={classes["form-label"]}>Image Link:</Form.Label>
        <Form.Control
          onChange={imageChangeHandler}
          // onBlur={() => saveRecipeHandler}
          type="text"
          placeholder="www.something.com/recipe/image"
          className={classes["form-input"]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label className={classes["form-label"]}>Title:</Form.Label>
        <Form.Control
          onChange={nameChangeHandler}
          // onBlur={() => saveRecipeHandler}
          type="name"
          placeholder="Mashed Potato"
          className={classes["form-input"]}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupIngredients">
        <Form.Label className={classes["form-label"]}>Ingredients:</Form.Label>
        <Form.Control
          onChange={ingredientsChangeHandler}
          // onBlur={() => saveRecipeHandler}
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
