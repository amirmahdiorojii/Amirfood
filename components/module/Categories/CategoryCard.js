import Link from "next/link";
import Image from "next/image";

function CategoryCard({ category }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group overflow-hidden rounded-2xl border bg-white transition hover:shadow-xl"
    >
      <div className="relative h-56 w-full">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold">
          {category.name}
        </h2>

        <p className="mt-2 text-gray-500">
          {category.count} Foods
        </p>
      </div>
    </Link>
  );
}

export default CategoryCard;