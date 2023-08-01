import React from "react";
import { useNavigate, useParams } from "react-router";

import { ButtonToolbar, Form } from "react-bootstrap";
import CancelButton from "../UI/Buttons/CancelButton";
import classes from "./RecipeForm.module.css";
import SaveButton from "../UI/Buttons/SaveButton";
import { recipes } from "../../models/Recipes";

import { editRecipeActions } from "../../store/edit-recipe";
import { useDispatch } from "react-redux";

const EditRecipeForm = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const { recipeId } = params;

  const editRecipe = recipes.find((editRecipe) => editRecipe.id === recipeId);

  let editedId = "";

  if (editRecipe !== undefined) {
    editedId = editRecipe.id;
  }

  // useEffect(() => {
  //   if (editRecipe !== undefined) {
  //     setEditedImg(editRecipe.img);
  //     setEditedName(editRecipe.recipeName);
  //     setEditedIngr(editRecipe.ingredients);
  //   } else {
  //     navigate("/new-recipe");
  //   }
  // }, [editRecipe, navigate]);

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editRecipeActions.editedImg(e.currentTarget.value));
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editRecipeActions.editedName(e.currentTarget.value));
  };

  const ingrChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editRecipeActions.editedIngr(e.currentTarget.value));
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (editRecipe !== undefined) {
    dispatch(editRecipeActions.handleSubmit(editedId));
    navigate("/");
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
