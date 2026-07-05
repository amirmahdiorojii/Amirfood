import { API_URL } from "@/config/api";
import { slugify } from "@/Utility/slugify";
import { getDetailValue } from "@/Utility/getDetailValue";

export async function getFoods() {
  const res = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch foods.");
  }

  return res.json();
}

export async function getCategoryBySlug(slug) {
  const categories = await getCategories();

  return categories.find((category) => category.slug === slug) ?? null;
}

export async function getCategories() {
  const foods = await getFoods();

  const map = new Map();

  foods.forEach((food) => {
    const cuisine = getDetailValue(food.details, "Cuisine");

    if (!cuisine) return;

    if (map.has(cuisine)) {
      map.get(cuisine).count++;
    } else {
      map.set(cuisine, {
        name: cuisine,
        slug: slugify(cuisine),
        count: 1,
        image: food.image,
      });
    }
  });

  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

export async function getFoodById(id) {
  const foods = await getFoods();

  return foods.find((food) => String(food.id) === String(id)) ?? null;
}

export async function getFoodsByCategory(slug) {
  const foods = await getFoods();

  console.log("Requested slug:", slug);

  foods.forEach((food) => {
    console.log(
      food.details?.Cuisine,
      "=>",
      slugify(getDetailValue(food.details, "Cuisine") || ""),
    );
  });

  return foods.filter(
    (food) => slugify(getDetailValue(food.details, "Cuisine") || "") === slug,
  );
}
