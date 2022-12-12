import TopNavbar from "../Nav/TopNavbar";
import Recipe from "./Recipes";
import RecipeItem from "./RecipeItem";

interface RecipeProps {
  recipes: typeof Recipe;
}

const RecipeList: React.FC<RecipeProps> = ({ recipes }: RecipeProps) => {
  if (!recipes?.length) {
    return (
      <div>
        <h1>No recipes found!</h1>
      </div>
    );
  }

  return (
    <div>
      <TopNavbar />
      {recipes.map((item) => (
        <RecipeItem
          key={item.id}
          id={item.id}
          recipeName={item.recipeName}
          ingredients={item.ingredients}
        />
      ))}
    </div>
  );
};

export default RecipeList;
