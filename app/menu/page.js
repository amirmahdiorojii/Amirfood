import MenuPage from "@/components/templates/MenuPage";
import { getFoods } from "@/services/server/food.service";

// ✅ جلوگیری از SSG / prerender conflict
export const dynamic = "force-dynamic";

export default async function Page() {
  const initialData = await getFoods();

  return <MenuPage initialData={initialData} />;
}