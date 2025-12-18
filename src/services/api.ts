// src/services/api.ts
import type { Restaurant } from "../types/restaurant";

const BASE = "http://host.docker.internal:3000";

export async function fetchRestaurants(): Promise<Restaurant[]> {
  const res = await fetch(`${BASE}/restaurants`);
  if (!res.ok) throw new Error("Failed to fetch restaurants");
  // json-server returns an array for /restaurants
  return (await res.json()) as Restaurant[];
}

export async function fetchRestaurantById(id: number | string): Promise<Restaurant | null> {
  const res = await fetch(`${BASE}/restaurants/${id}`);
  if (!res.ok) return null;
  return (await res.json()) as Restaurant;
}
