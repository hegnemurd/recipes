import recipes from "./Recipes";
import RecipeItem from "./RecipeItem";

// const RecipeList: React.FC<RecipeListProps> = ({
//   recipes,
// }: RecipeListProps) => {

// interface RecipesItems{
//     recipesData: 
// }

const RecipeList = ({ data }: { data: typeof recipes }) => {
    // use interface from Recipes
  if (!data?.length) {
    return (
      <div>
        <h1>No recipes found!</h1>
      </div>
    );
  }

  return (
    <div>
      {data.map(({ id, recipeName, ingredients }) => (
        <RecipeItem
          key={id}
          id={id}
          recipeName={recipeName}
          ingredients={ingredients}
        />
      ))}
    </div>
  );
};

export default RecipeList;
