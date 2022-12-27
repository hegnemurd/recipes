import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import classes from "./NewRecipeForm.module.css";

const NewRecipeForm = (props: any) => {
  const [enteredImg, setEnteredImg] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState([""]);

  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredImg(e.currentTarget.value);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.currentTarget.value);
  };

  const ingredientsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIngredients = e.currentTarget.value;
    // needs fixing to accept ingredients with a space "chopped onion",
    // rather than creating two different ingredients "chopped, onion"
    const newIngArray = newIngredients.split(/[ ,]+/);
    setEnteredIngredients(newIngArray);
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const uniqueId = Math.floor(Math.random() * 1000000).toString();

    console.log(enteredImg, enteredName, enteredIngredients);

    // all data is collected in props, but is not sent to app, other than the first prop
    props.newRecipeData(enteredImg, uniqueId, enteredName, enteredIngredients);
  };

  return (
    <Form className={classes.form} onSubmit={onSubmitHandler}>
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
      <Button variant="outline-light" className={classes.button} type="submit">
        Save
      </Button>
      <Button variant="outline-light" className={classes.button}>
        Cancel
      </Button>
    </Form>
  );
};

export default NewRecipeForm;
