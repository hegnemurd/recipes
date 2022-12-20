import { Form } from "react-bootstrap";
import classes from "./NewRecipeForm.module.css";

const NewRecipeForm = () => {
  return (
    <Form className={classes.form}>
      <Form.Group
        className={`mb-3 ${classes["form-group"]}`}
        controlId="formGroupImage"
      >
        <Form.Control type="text" placeholder="Image Link" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupTitle">
        <Form.Control type="title" placeholder="Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupIngredients">
        <Form.Control type="ingredients" placeholder="Ingredients" />
      </Form.Group>
    </Form>
  );
};

export default NewRecipeForm;
