export interface Recipe {
  id: string;
  recipeName: string;
  ingredients: string;
}

const recipes: Recipe[] = [
  {
    id: "r1",
    recipeName: "Spaghetti Bolognese",
    ingredients:
      "Olive oil, onions, garlic, rosemary, meatballs, spaghetti, tomato sauce",
  },
  {
    id: "r2",
    recipeName: "Chicken Curry",
    ingredients:
      "Olive oil, onion, garlic, ginger, chicken, spices, chopped tomatoes, greek yogurt, coriander, rice",
  },
  {
    id: "r3",
    recipeName: "Lentil Soup",
    ingredients: "Vegetable stock, red lentils, carrots, leeks, parsley",
  },
];

export default recipes;
