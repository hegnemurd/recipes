import React from "react";
import { useNavigate } from "react-router";

import { ButtonToolbar, Form } from "react-bootstrap";
import CancelButton from "../UI/Buttons/CancelButton";
import classes from "./RecipeForm.module.css";
import SaveButton from "../UI/Buttons/SaveButton";
import { useDispatch } from "react-redux";

import { newRecipeActions } from "../../store/new-recipe";

const NewRecipeForm = (props: any) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(newRecipeActions.newImage(e.currentTarget.value));
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(newRecipeActions.newName(e.currentTarget.value));
  };

  const ingredientsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(newRecipeActions.newIngr(e.currentTarget.value));
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newId = Math.floor(Math.random() * 1000000).toString();
    dispatch(newRecipeActions.handleSubmit(newId));
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
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label className={classes["form-label"]}>Title:</Form.Label>
        <Form.Control
          className={classes["form-input"]}
          type="name"
          placeholder="Mashed Potato"
          onChange={nameChangeHandler}
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
