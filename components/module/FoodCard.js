"use client";

import { FaTag } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

function FoodCard({ food }) {
  const router = useRouter();

  const finalPrice = food.discount
    ? food.price - (food.price * food.discount) / 100
    : food.price;

  const goToDetails = () => {
    router.push(`/menu/${food.id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
      {/* IMAGE */}
      <div className="h-48 w-full overflow-hidden">
        <Image
          src={food.image}
          alt={food.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4">
        {/* title + discount */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{food.name}</h3>

          {food.discount > 0 && (
            <span className="flex items-center gap-1 text-sm text-red-500">
              <FaTag /> {food.discount}%
            </span>
          )}
        </div>

        {/* intro */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {food.introduction}
        </p>

        {/* price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="font-bold text-orange-500">
            ${finalPrice.toFixed(2)}
          </span>

          {food.discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ${food.price}
            </span>
          )}
        </div>

        {/* button */}
        <button
          onClick={goToDetails}
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
