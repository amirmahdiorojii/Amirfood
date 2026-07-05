import PageHeader from "@/components/module/PageHeader";
import CategoriesGrid from "@/components/module/Categories/CategoriesGrid";

function CategoriesPage({ categories }) {
  return (
    <>
      <PageHeader title="Categories" />

      <CategoriesGrid categories={categories} />
    </>
  );
}

export default CategoriesPage;