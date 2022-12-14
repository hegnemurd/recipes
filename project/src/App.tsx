import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import RecipeList from "./pages/RecipeList";
// import RecipeDetails from "./components/Details/RecipeDetails";
// import Recipe from "./models/Recipes";
import Details from "./pages/Details";
import { recipes } from "./models/Recipes";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<RecipeList items={recipes} />}></Route>
          <Route path="/recipe-details/:recipeId" element={<Details />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
