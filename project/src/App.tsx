import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import RecipeList from "./pages/RecipeList";
import Details from "./pages/Details";
import { recipes } from "./models/Recipes";
import NewRecipeForm from "./components/NewRecipeForm/NewRecipeForm";

function App() {
  const newRecipeData = (
    uniqueId: string,
    enteredImg: string,
    enteredName: string,
    enteredIngredients: string[]
  ) => {
    recipes.push({
      id: uniqueId,
      img: enteredImg,
      recipeName: enteredName,
      ingredients: enteredIngredients,
    });

    console.log(uniqueId, enteredImg, enteredName, enteredIngredients);
    // console.log(editRecipe.img, enteredImg, enteredName, enteredIngredients);

    const changedRecipe = recipes.find(
      (changedRecipe) => changedRecipe.id === uniqueId
    );

    // let newRecipes = recipes.map((array) => {
    //   var returnValue = { ...array };
    //   const emptyArray = [""];
    //   if (array.id === uniqueId) {
    //     if (returnValue.img !== undefined && returnValue.img !== "") {
    //       returnValue.img = enteredImg;
    //     } else if (
    //       returnValue.recipeName !== undefined &&
    //       returnValue.recipeName !== ""
    //     ) {
    //       returnValue.recipeName = enteredName;
    //     } else if (
    //       returnValue.ingredients !== undefined &&
    //       returnValue.ingredients !== emptyArray
    //     ) {
    //       returnValue.ingredients = enteredIngredients;
    //     }
    //   }

    //   return returnValue;
    // });

    // console.log(newRecipes);

    console.log(changedRecipe);
  };
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<RecipeList items={recipes} />}></Route>
          <Route path="/recipe-details/:recipeId" element={<Details />}></Route>
          <Route
            path="/recipe-details/:recipeId/edit"
            element={
              <NewRecipeForm items={recipes} newRecipeData={newRecipeData} />
            }
          ></Route>
          <Route
            path="/new-recipe"
            element={<NewRecipeForm newRecipeData={newRecipeData} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
