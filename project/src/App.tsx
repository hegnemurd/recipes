import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import RecipeList from "./pages/RecipeList";
import Details from "./pages/Details";
import Recipe, { recipes } from "./models/Recipes";
import NewRecipeForm from "./components/NewRecipeForm/NewRecipeForm";

function App() {
  const newRecipeData = (newRecipeData: Recipe) => {
    // new recipe data missing all data
    // except for the first parameter that gets sent through
    recipes.push(newRecipeData);
    console.log(newRecipeData.id);
    console.log(newRecipeData.img);
    console.log(newRecipeData.recipeName);
    console.log(newRecipeData.ingredients);

    console.log(recipes);
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
