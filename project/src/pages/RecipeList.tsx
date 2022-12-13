import Recipe from "../models/Recipes";
import RecipeItem from "../components/Recipes/RecipeItem";

const RecipeList: React.FC<{ items: Recipe[] }> = (props) => {
  // if (!recipes?.length) {
  //   return (
  //     <div>
  //       <h1>No recipes found!</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      {props.items.map((item: any) => (
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
