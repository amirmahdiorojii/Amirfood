// components/module/FoodDetailsPage/Ingredients.jsx

function Ingredients({ ingredients }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">
        Ingredients
      </h2>

      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <ul className="space-y-4">
          {ingredients.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex-shrink-0">
                {index + 1}
              </span>

              <p className="text-gray-700 leading-7">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Ingredients;