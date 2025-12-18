// src/components/RestaurantCard.tsx
import { Link } from "react-router-dom";
import type { Restaurant } from "../types/restaurant";
import { useState } from "react";

const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='700'><rect width='100%' height='100%' fill='#f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-size='36'>No image</text></svg>`
  );

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const [imgSrc, setImgSrc] = useState<string>(restaurant.image ?? PLACEHOLDER);

  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block group">
      <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <div className="relative h-44 md:h-52">
          <img
            src={imgSrc}
            alt={restaurant.name}
            onError={() => setImgSrc(PLACEHOLDER)}
            className="object-cover w-full h-full"
          />
          <div className="absolute right-3 top-3 bg-gray-900/75 text-white px-2 py-1 rounded-full text-sm flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline-block">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" fill="currentColor"/>
            </svg>
            <span>{restaurant.rating ?? "—"}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold">{restaurant.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{(restaurant.cuisine || []).join(", ")}</p>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <div>{restaurant.deliveryTime ? `${restaurant.deliveryTime} mins` : "—"}</div>
            <div>₹{restaurant.costForTwo ?? "—"} for two</div>
          </div>
        </div>
      </article>
    </Link>
  );
}
