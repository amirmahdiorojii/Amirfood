import CategoriesPage from "@/components/templates/CategoriesPage";
import { getCategories } from "@/services/server/food.service";

export default async function Page() {
  const categories = await getCategories();

  return <CategoriesPage categories={categories} />;
}