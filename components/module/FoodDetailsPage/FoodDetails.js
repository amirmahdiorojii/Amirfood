// components/module/FoodDetailsPage/FoodDetails.jsx

function FoodDetails({ food }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">
        About this dish
      </h2>

      {/* Introduction */}
      <p className="text-gray-600 leading-8 mb-8">
        {food.introduction}
      </p>

      {/* Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {food.details.map((item, index) => {
          const key = Object.keys(item)[0];
          const value = item[key];

          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border p-5"
            >
              <p className="text-sm text-gray-500 mb-2">
                {key}
              </p>

              <p className="font-semibold text-lg">
                {value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FoodDetails;