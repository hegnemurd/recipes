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
  };
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<RecipeList items={recipes} />}></Route>
          <Route path="/recipe-details/:recipeId" element={<Details />}></Route>
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
