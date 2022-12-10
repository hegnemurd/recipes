import Recipes from "./Recipes";

const RecipeItem = () => {
    return (
        <div>
          <div>
            <h2>{Recipes.name}</h2>
            <p>{Recipes.ingredients}</p>
          </div>
          <div>
            <h2>{data[1].name}</h2>
            <p>{data[1].ingredients}</p>
          </div>
          <div>
            <h2>{data[2].name}</h2>
            <p>{data[2].ingredients}</p>
          </div>
        </div>
      );
}