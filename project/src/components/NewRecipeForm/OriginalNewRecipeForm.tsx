const OriginalNewRecipeForm = () => {};

export default OriginalNewRecipeForm;

// import React, { useState, useRef } from "react";

// import { Button, Form } from "react-bootstrap";
// import Recipe from "../../models/Recipes";
// import classes from "./NewRecipeForm.module.css";

// // type NewRecipe = {
// //   id?: string;
// //   img?: string;
// //   recipeName?: string;
// //   ingredients?: string[];
// // };

// const NewRecipeForm = () => {
//   const [newRecipes, setNewRecipe] = useState<Recipe>();
//   const idRef = useRef<HTMLInputElement>(null);
//   const imgRef = useRef<HTMLInputElement>(null);
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ingredientsRef = useRef<HTMLInputElement>(null);

//   // const idChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const newId = e.currentTarget.value;
//   //   return newId;
//   //   // return (newRecipes.id = newId);
//   // };

//   //  const imageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //    const newImage = e.currentTarget.value;
//   //    return newImage;
//   //    //  return (newRecipe.img = newImage);
//   //  };

//   // const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const newName = e.currentTarget.value;
//   //   return newName;
//   //   // return (newRecipe.recipeName = newName);
//   // };

//   // const ingredientsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const newIngredients = e.currentTarget.value;
//   //   const newIngArray = newIngredients.split(/[ ,]+/);
//   //   return newIngArray;
//   //   // return (newRecipe.ingredients = newIngArray);
//   // };

//   const saveRecipeHandler = (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();

//     const newAddedRec = {
//       id: idRef.current!.value,
//       img: imgRef.current!.value,
//       name: nameRef.current!.value,
//       ingredients: ingredientsRef.current!.value
//     }
//     // setNewRecipe(...newRecipes, {
//     //   id: newRecipes.newId,
//     //   img: newImage,
//     //   recipeName: newName,
//     //   ingredents: newIngArray,
//     // });
//   };

//   // const blurHandler = (newImage: string) =>{
//   //     saveRecipeHandler(newImage);
//   // }

//   // const saveRecipeHandler = (
//   //   newImage: any,
//   //   newTitle: string,
//   //   newIngredients: string[]
//   // ) => {
//   // const newImageAddress = newImage.target.value;
//   // const newTitleName = newTitle;
//   // const newIngredientList = newIngredients;

//   //  return console.log(newImage);
//   // return console.log(newImageAddress);
//   //  console.log(newTitleName);
//   //     console.log(newIngredientList);

//   //     recipes.push();
//   // };

//   return (
//     <Form className={classes.form} onSubmit={saveRecipeHandler(newRecipes)}>
//       <Form.Group className="mb-3" controlId="formGroupTitle">
//         <Form.Label className={classes["form-label"]}>Id:</Form.Label>
//         <Form.Control
//           // onChange={idChangeHandler}
//           // onBlur={() => saveRecipeHandler}
//           ref={idRef}
//           type="id"
//           placeholder="recipe name as id"
//           className={classes["form-input"]}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formGroupImage">
//         <Form.Label className={classes["form-label"]}>Image Link:</Form.Label>
//         <Form.Control
//           // onChange={imageChangeHandler}
//           // onBlur={() => saveRecipeHandler}
//           ref={imgRef}
//           type="text"
//           placeholder="www.something.com/recipe/image"
//           className={classes["form-input"]}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formGroupName">
//         <Form.Label className={classes["form-label"]}>Title:</Form.Label>
//         <Form.Control
//           // onChange={nameChangeHandler}
//           // onBlur={() => saveRecipeHandler}
//           ref={nameRef}
//           type="name"
//           placeholder="Mashed Potato"
//           className={classes["form-input"]}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formGroupIngredients">
//         <Form.Label className={classes["form-label"]}>Ingredients:</Form.Label>
//         <Form.Control
//           // onChange={ingredientsChangeHandler}
//           // onBlur={() => saveRecipeHandler}
//           ref={ingredientsRef}
//           as="textarea"
//           rows={5}
//           type="ingredients"
//           placeholder="Potatoes, onions, garlic, ..."
//           className={classes["form-input"]}
//         />
//       </Form.Group>
//       <Button
//         variant="outline-light"
//         className={classes.button}
//         // onSubmit={saveRecipeHandler}
//       >
//         Save
//       </Button>
//       <Button variant="outline-light" className={classes.button}>
//         Cancel
//       </Button>
//     </Form>
//   );
// };

// export default NewRecipeForm;
