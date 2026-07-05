
import MenuPage from "@/components/templates/MenuPage";
import { getFoods } from "@/services/server/food.service";

export default async function Page() {
  const initialData = await getFoods();

  return <MenuPage initialData={initialData} />;
}