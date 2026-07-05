import PageHeader from "@/components/module/PageHeader";
import FoodList from "@/components/module/FoodList";

function CategoryDetailsPage({ category, foods }) {
  return (
    <>
      <PageHeader title={category.name} />

      <FoodList foods={foods} />
    </>
  );
}

export default CategoryDetailsPage;