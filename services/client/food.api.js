import { API_URL } from "@/config/api";

export const FOOD_API = API_URL;

export async function foodFetcher(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch foods.");
  }

  return res.json();
}