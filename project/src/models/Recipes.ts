interface Recipe {
  id: string;
  img: string;
  recipeName: string;
  ingredients: string[];
}

export const recipes: Recipe[] = [
  {
    id: "r1",
    img: "https://images.unsplash.com/photo-1614777986387-015c2a89b696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    recipeName: "Spaghetti Bolognese",
    ingredients: [
      "Olive oil",
      "onions",
      "garlic",
      "rosemary",
      "meatballs",
      "spaghetti",
      "tomato sauce",
    ],
  },
  {
    id: "r2",
    img: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    recipeName: "Chicken Curry",
    ingredients: [
      "Olive oil",
      "onion",
      "garlic",
      "ginger",
      "chicken",
      "spices",
      "chopped tomatoes",
      "greek yogurt",
      "coriander",
      "rice",
    ],
  },
  {
    id: "r3",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    recipeName: "Lentil Soup",
    ingredients: [
      "Vegetable stock",
      "red lentils",
      "carrots",
      "leeks",
      "parsley",
    ],
  },
];

export default Recipe;
