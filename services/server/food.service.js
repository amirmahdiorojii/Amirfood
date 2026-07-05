import { slugify } from "@/Utility/slugify";
import { getDetailValue } from "@/Utility/getDetailValue";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://food-api-server.vercel.app/data";

// safe fetch wrapper
async function fetchData() {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch foods.");
    }

    return await res.json();
  } catch (err) {
    console.error("API fetch error:", err);
    return []; // 👈 prevent build crash
  }
}

export async function getFoods() {
  return await fetchData();
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

  return [...map.values()].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export async function getFoodById(id) {
  const foods = await getFoods();
  return foods.find((food) => String(food.id) === String(id)) ?? null;
}

export async function getFoodsByCategory(slug) {
  const foods = await getFoods();

  return foods.filter(
    (food) =>
      slugify(getDetailValue(food.details, "Cuisine") || "") === slug
  );
}