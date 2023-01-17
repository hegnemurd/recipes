import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { ButtonToolbar, Form } from "react-bootstrap";
import CancelButton from "../UI/Buttons/CancelButton";
import classes from "./NewRecipeForm.module.css";
import SaveButton from "../UI/Buttons/SaveButton";
import { recipes } from "../../models/Recipes";

const EditRecipeForm = (props: any) => {
  const [editedImg, setEditedImg] = useState("");
  const [editedName, setEditedName] = useState("");
  const [editedIngr, setEditedIngr] = useState([""]);

  const navigate = useNavigate();

  const params = useParams();
  const { recipeId } = params;

  const editRecipe = recipes.find((editRecipe) => editRecipe.id === recipeId);

  let editedId = "";

  if (editRecipe !== undefined) {
    editedId = editRecipe.id;
  }

  useEffect(() => {
    if (editRecipe !== undefined) {
      setEditedImg(editRecipe.img);
      setEditedName(editRecipe.recipeName);
      setEditedIngr(editRecipe.ingredients);
    } else {
      navigate("/new-recipe");
    }
  }, []);

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedImg(e.currentTarget.value);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.currentTarget.value);
  };

  const ingrChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedIngr = e.currentTarget.value;
    const changedIngrArr = changedIngr.split(/[,]+/);
    setEditedIngr(changedIngrArr);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // const uniqueId = Math.floor(Math.random() * 1000000).toString();

    if (editRecipe !== undefined) {
      props.editedRecipeData(editedId, editedImg, editedName, editedIngr);
    }

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
          defaultValue={editRecipe?.img}
          onChange={imageChangeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label className={classes["form-label"]}>Title:</Form.Label>
        <Form.Control
          className={classes["form-input"]}
          type="name"
          placeholder="Mashed Potato"
          defaultValue={editRecipe?.recipeName}
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
          defaultValue={editRecipe?.ingredients}
          onChange={ingrChangeHandler}
        />
      </Form.Group>
      <ButtonToolbar>
        <SaveButton />
        <CancelButton />
      </ButtonToolbar>
    </Form>
  );
};

export default EditRecipeForm;
