import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import RecipeList from "./pages/RecipeList";
import Details from "./pages/Details";
import { recipes } from "./models/Recipes";
import NewRecipeForm from "./components/NewRecipeForm/NewRecipeForm";
import EditRecipeForm from "./components/NewRecipeForm/EditRecipeForm";
import { connect } from "react-redux";

function App(props: any) {
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
              <EditRecipeForm
                items={recipes}
              />
            }
          ></Route>
          <Route path="/new-recipe" element={<NewRecipeForm />} />
        </Routes>
      </main>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { editedId: state.editedId };
};

export default connect(mapStateToProps)(App);
