// components/module/FoodDetailsPage/Recipe.jsx

function Recipe({ recipe }) {
  return (
    <section className="mt-12 mb-12">
      <h2 className="text-3xl font-bold mb-6">
        Recipe
      </h2>

      <div className="space-y-5">
        {recipe.map((step, index) => (
          <div
            key={index}
            className="flex gap-5 bg-white border rounded-2xl shadow-sm p-6"
          >
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
            </div>

            {/* Step Content */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Step {index + 1}
              </h3>

              <p className="text-gray-600 leading-8">
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recipe;