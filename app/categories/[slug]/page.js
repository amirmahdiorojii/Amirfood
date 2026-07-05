import { notFound } from "next/navigation";

import CategoryDetailsPage from "@/components/templates/CategoryDetailsPage";

import {
  getCategoryBySlug,
  getFoodsByCategory,
} from "@/services/server/food.service";

// ✅ کاملاً داینامیک (مناسب API + جلوگیری از build error)
export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const { slug } = params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const foods = await getFoodsByCategory(slug);

  return (
    <CategoryDetailsPage
      category={category}
      foods={foods}
    />
  );
}