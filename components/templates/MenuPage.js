"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";

import FoodList from "@/components/module/FoodList";
import FilterBar from "@/components/module/FilterBar";

import { FOOD_API, foodFetcher } from "@/services/client/food.api";
import { getDetailValue } from "@/Utility/getDetailValue";
import { slugify } from "@/Utility/slugify";

function MenuPage({ initialData }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlCategory = searchParams.get("category") || "all";
  const urlSearch = searchParams.get("search") || "";

  const { data } = useSWR(FOOD_API, foodFetcher, {
    fallbackData: initialData,
    refreshInterval: 10000,
  });

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [search, setSearch] = useState(urlSearch);

  // sync state when URL changes (back/forward support)
  useEffect(() => {
    setSelectedCategory(urlCategory);
    setSearch(urlSearch);
  }, [urlCategory, urlSearch]);

  // update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory !== "all") {
      params.set("category", selectedCategory);
    }

    if (search) {
      params.set("search", search);
    }

    const query = params.toString();
    const url = query ? `/menu?${query}` : "/menu";

    router.replace(url, { scroll: false });
  }, [selectedCategory, search]);

  // build categories from data
  const categories = data
    ? Array.from(
        new Set(
          data
            .map((food) => getDetailValue(food.details, "Cuisine"))
            .filter(Boolean)
        )
      ).map((cuisine) => ({
        name: cuisine,
        slug: slugify(cuisine),
      }))
    : [];

  // filter foods
  const filteredFoods = data?.filter((food) => {
    const cuisine = getDetailValue(food.details, "Cuisine");

    const matchCategory =
      selectedCategory === "all" ||
      slugify(cuisine || "") === selectedCategory;

    const matchSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Menu
      </h1>

      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        search={search}
        onSearch={setSearch}
      />

      <FoodList foods={filteredFoods} />
    </section>
  );
}

export default MenuPage;