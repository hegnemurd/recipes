import { Route, Routes, useNavigate } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import RecipeList from "./pages/RecipeList";
import Details from "./pages/Details";
import { recipes } from "./models/Recipes";
import NewRecipeForm from "./components/NewRecipeForm/NewRecipeForm";
import EditRecipeForm from "./components/NewRecipeForm/EditRecipeForm";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();

  const newId = useSelector((state: any) => state.newRecipe.newId);
  const newImg = useSelector((state: any) => state.newRecipe.newImg);
  const newName = useSelector((state: any) => state.newRecipe.newName);
  const newIngr = useSelector((state: any) => state.newRecipe.newIngr);

  if (
    newId !== undefined &&
    newImg !== undefined &&
    newName !== undefined &&
    newIngr !== undefined
  ) {
    recipes.push({
      id: newId,
      img: newImg,
      recipeName: newName,
      ingredients: newIngr,
    });
  } else {
    console.log(newId);
  }

  // newRecipeData = (
  //   newId: string,
  //   newImg: string,
  //   newName: string,
  //   newIngr: string[]
  // ) => {
  // recipes.push({
  //   id: newRecipeData.newId,
  //   img: newRecipeData.newImg,
  //   recipeName: newRecipeData.newName,
  //   ingredients: newRecipeData.newIngr,
  // });
  // };

  const editedRecipeData = (
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
                editedRecipeData={editedRecipeData}
              />
            }
          ></Route>
          <Route path="/new-recipe" element={<NewRecipeForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
