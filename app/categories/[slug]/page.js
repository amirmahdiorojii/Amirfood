import { notFound } from "next/navigation";

import CategoryDetailsPage from "@/components/templates/CategoryDetailsPage";

import {
  getCategoryBySlug,
  getCategories,
  getFoodsByCategory,
} from "@/services/server/food.service";

export default async function Page({ params }) {
  const { slug } = await params;

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

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}