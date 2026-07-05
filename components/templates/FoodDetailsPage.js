// components/templates/FoodDetailsPage.jsx

import FoodHero from "../module/FoodDetailsPage/FoodHero";
import FoodDetails from "../module/FoodDetailsPage/FoodDetails";
import Ingredients from "../module/FoodDetailsPage/Ingredients";
import Recipe from "../module/FoodDetailsPage/Recipe";
import PageHeader from "@/components/module/PageHeader";

function FoodDetailsPage({ food }) {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageHeader title={`Details: ${food.name}`} />
      <FoodHero food={food} />
      <FoodDetails food={food} />
      <Ingredients ingredients={food.ingredients} />
      <Recipe recipe={food.recipe} />
    </div>
  );
}

export default FoodDetailsPage;
