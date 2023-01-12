import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

import { ButtonToolbar, Form } from "react-bootstrap";
import CancelButton from "../UI/Buttons/CancelButton";
import classes from "./NewRecipeForm.module.css";
import SaveButton from "../UI/Buttons/SaveButton";
import { recipes } from "../../models/Recipes";

const NewRecipeForm = (props: any) => {
  const [enteredImg, setEnteredImg] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState([""]);

  const navigate = useNavigate();

  const params = useParams();
  const { recipeId } = params;

  const editRecipe = recipes.find((editRecipe) => editRecipe.id === recipeId);

  // if editRecipe is not found then give a blank new recipe form to fill out

  // if (editRecipe === undefined) {
  //   return (setEnteredImg("") setEnteredName("");
  //   setEnteredIngredients([""]);)
  // }

  // props.newRecipe = editRecipe;

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredImg(e.target.value);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const ingredientsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIngredients = e.target.value;
    const newIngArray = newIngredients.split(/[,]+/);
    setEnteredIngredients(newIngArray);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // const uniqueId = Math.floor(Math.random() * 1000000).toString();
    const uniqueId = editRecipe?.id;

    // send all form input values across to parent component (App.tsx) even if unchanged

    props.newRecipeData(uniqueId, enteredImg, enteredName, enteredIngredients);

    // console.log(editRecipe?.img, editRecipe?.recipeName, editRecipe?.ingredients)

    navigate("/");
  };

  return (
    <Form className={classes.form} onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formGroupImage">
        <Form.Label className={classes["form-label"]}>Image Link:</Form.Label>
        <Form.Control
          className={classes["form-input"]}
          type="text"
          placeholder="www.something.com/recipe/image"
          onChange={imageChangeHandler}
          value={enteredImg || editRecipe?.img}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label className={classes["form-label"]}>Title:</Form.Label>
        <Form.Control
          className={classes["form-input"]}
          type="name"
          placeholder="Mashed Potato"
          onChange={nameChangeHandler}
          value={enteredName || editRecipe?.recipeName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupIngredients">
        <Form.Label className={classes["form-label"]}>
          Ingredients: &#40;write ingredients with commas separating them, like
          the example below&#41;
        </Form.Label>
        <Form.Control
          className={classes["form-input"]}
          as="textarea"
          rows={5}
          type="ingredients"
          placeholder="Potatoes, onions, garlic, ..."
          onChange={ingredientsChangeHandler}
          value={enteredIngredients || editRecipe?.ingredients}
        />
      </Form.Group>
      <ButtonToolbar>
        <SaveButton />
        <CancelButton />
      </ButtonToolbar>
    </Form>
  );
};

export default NewRecipeForm;
