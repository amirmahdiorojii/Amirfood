import FoodCard from "./FoodCard";

function FoodList({ foods }) {
  if (!foods?.length) {
    return (
      <div className="container mx-auto py-16 text-center text-gray-500">
        No foods found.
      </div>
    );
  }

  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}
      </div>
    </section>
  );
}

export default FoodList;