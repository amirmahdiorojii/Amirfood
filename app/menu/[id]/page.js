// app/menu/[id]/page.jsx

import { notFound } from "next/navigation";
import FoodDetailsPage from "@/components/templates/FoodDetailsPage";
import { getFoodById } from "@/services/server/food.service";

export default async function Page({ params }) {
  const { id } = await params;

  const food = await getFoodById(id);

  if (!food) {
    notFound();
  }

  return <FoodDetailsPage food={food} />;
}