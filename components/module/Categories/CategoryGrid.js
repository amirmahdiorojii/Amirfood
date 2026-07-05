import CategoryCard from "./CategoryCard";

function CategoriesGrid({ categories }) {
  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesGrid;