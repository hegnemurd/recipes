import { Route } from "react-router-dom";

import RecipeList from "./components/Recipes/RecipeList";
import recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <RecipeList recipes={recipes} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
