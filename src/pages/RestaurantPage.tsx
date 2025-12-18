// src/pages/RestaurantPage.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type MenuItem = { id: number; name: string; price: number };
type R = {
  id: number;
  name: string;
  cuisine?: string[];
  rating?: number;
  image?: string;
  address?: string;
  website?: string;
  phone?: string;
  description?: string;
  menu?: MenuItem[];
  costForTwo?: number;
};

export default function RestaurantPage() {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<R | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`http://localhost:5000/restaurants/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setRestaurant(data);
      })
      .catch(() => setRestaurant(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-8">Loading restaurant…</div>;
  if (!restaurant) return <div className="p-8">Restaurant not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link to="/" className="text-sm text-brand-500">← Back to listings</Link>

      <div className="mt-4 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
          <h1 className="mt-4 text-3xl font-bold">{restaurant.name}</h1>
          <p className="text-gray-600 mt-1">{restaurant.cuisine?.join(", ")}</p>
          <p className="mt-4 text-gray-700">{restaurant.description}</p>

          <div className="mt-6 bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-3">Menu</h3>
            <ul className="space-y-3">
              {restaurant.menu?.map((m) => (
                <li key={m.id} className="flex justify-between">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-gray-700">₹{m.price}</div>
                </li>
              )) ?? <li className="text-gray-500">No menu available</li>}
            </ul>
          </div>
        </div>

        <aside className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Details</h3>
          <div className="mt-2 text-sm text-gray-700 space-y-2">
            <div>Rating: {restaurant.rating ?? "—"}</div>
            <div>Cost for two: ₹{restaurant.costForTwo ?? "—"}</div>
            <div>Address: {restaurant.address ?? "—"}</div>
            {restaurant.website && (
              <div>
                Website:{" "}
                <a href={restaurant.website} target="_blank" rel="noreferrer" className="text-brand-500">
                  {restaurant.website}
                </a>
              </div>
            )}
            <div>Phone: {restaurant.phone ?? "—"}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
