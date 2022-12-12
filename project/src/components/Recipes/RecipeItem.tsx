// import RecipeList from "./Recipes";

// const RecipeItem = ({data}: {data: typeof RecipeList}) => {
//   return (
//     <div>
//       {data.children}
//       <h2>{data.name}</h2>
//       <p>{data.ingredients}</p>
//     </div>
//   );
// };

import { Link } from "react-router-dom";

import classes from "./RecipeItem.module.css";

const RecipeItem = (props: {
  id: string;
  recipeName: string;
  ingredients: string;
}) => {
  return (
    <div className={classes.div}>
      <h2>{props.recipeName}</h2>
      <p>{props.ingredients}</p>
      <Link className="btn" to="/recipe-details">
        Details
      </Link>
    </div>
  );
};

export default RecipeItem;

// import Recipes from "./Recipes";

// const RecipeItem = (props: Array<object>) => {
//     return (
//         <div>
//           <div>
//             <h2>{props[0].name}</h2>
//             <p>{props.ingredients}</p>
//           </div>
//           <div>
//             <h2>{data[1].name}</h2>
//             <p>{data[1].ingredients}</p>
//           </div>
//           <div>
//             <h2>{data[2].name}</h2>
//             <p>{data[2].ingredients}</p>
//           </div>
//         </div>
//       );
// }
