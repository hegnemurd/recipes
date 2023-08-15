import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import RecipeList from "./pages/RecipeList";
import Details from "./pages/Details";
import { recipes } from "./models/Recipes";
import NewRecipeForm from "./components/NewRecipeForm/NewRecipeForm";
import EditRecipeForm from "./components/NewRecipeForm/EditRecipeForm";
import { connect } from "react-redux";
// import {editedRecipeData} from "./store/edit-recipe";

function App(props: any) {
  const navigate = useNavigate();

  const newEditedRecipeData = (
    editedId: string,
    editedImg: string,
    editedName: string,
    editedIngr: string[]
  ) => {
    const replaceRecipe = recipes.find((replaced) => replaced.id === editedId);

    if (replaceRecipe !== undefined) {
      replaceRecipe.img = editedImg;
      replaceRecipe.recipeName = editedName;
      replaceRecipe.ingredients = editedIngr;
      return console.log(replaceRecipe);
    } else {
      console.log("recipe not found");
      return navigate("/");
    }
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
              <EditRecipeForm
                items={recipes}
                // editedRecipeData={editedRecipeData}
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
