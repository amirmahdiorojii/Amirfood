import Image from "next/image";
import {
  FaTag,
  FaUtensils,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

function FoodHero({ food }) {
  const finalPrice = food.discount
    ? food.price - (food.price * food.discount) / 100
    : food.price;

  const getValue = (key) => {
    return food.details.find((item) => item[key])?.[key];
  };

  return (
    <section className="py-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}

        <div className="relative w-full h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">

          <Image
            src={food.image}
            alt={food.name}
            fill
            priority
            className="object-cover hover:scale-105 duration-500"
          />

        </div>

        {/* Content */}

        <div>

          {food.discount > 0 && (
            <span className="inline-flex items-center gap-2 bg-red-100 text-red-500 px-4 py-2 rounded-full mb-5 font-medium">
              <FaTag />
              {food.discount}% OFF
            </span>
          )}

          <h1 className="text-5xl font-black">
            {food.name}
          </h1>

          <p className="text-gray-500 leading-8 mt-6">
            {food.introduction}
          </p>

          {/* Price */}

          <div className="flex items-end gap-4 mt-8">

            <span className="text-5xl font-bold text-orange-500">
              ${finalPrice.toFixed(2)}
            </span>

            {food.discount > 0 && (
              <span className="text-2xl text-gray-400 line-through">
                ${food.price}
              </span>
            )}

          </div>

          {/* Quick Info */}

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-100">
              <FaUtensils className="text-orange-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Cuisine</p>
                <p className="font-semibold">
                  {getValue("Cuisine")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-100">
              <GiChefToque className="text-orange-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">
                  Difficulty
                </p>
                <p className="font-semibold">
                  {getValue("Difficulty")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-100">
              <FaClock className="text-orange-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">
                  Cooking Time
                </p>
                <p className="font-semibold">
                  {getValue("Cooking Time")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-100">
              <FaUsers className="text-orange-500 text-xl" />
              <div>
                <p className="text-sm text-gray-500">
                  Serves
                </p>
                <p className="font-semibold">
                  {getValue("Serves")}
                </p>
              </div>
            </div>

          </div>

          {/* Button */}

          <button className="mt-10 px-10 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white font-semibold">
            Order Now
          </button>

        </div>

      </div>
    </section>
  );
}

export default FoodHero;