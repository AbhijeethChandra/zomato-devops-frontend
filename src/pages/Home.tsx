// src/pages/Home.tsx
import { useEffect, useState } from "react";
import type { Restaurant } from "../types/restaurant";
import { fetchRestaurants } from "../services/api";
import RestaurantCard from "../components/RestaurantCard";

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  // Search state
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchRestaurants()
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    (r.cuisine ?? []).join(" ").toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-10 text-2xl font-semibold text-gray-600">
        Loading restaurants...
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-pink-400 to-yellow-300 p-10 rounded-3xl text-white shadow-lg mb-16">
        <h1 className="text-5xl font-extrabold mb-4">
          Find the best food near you
        </h1>
        <p className="text-lg mb-6 opacity-90">
          Explore top restaurants, quick delivery and exclusive offers.
        </p>

        {/* SEARCH BAR */}
        <div className="bg-white rounded-full p-3 flex items-center shadow-xl">
          <input
            type="text"
            placeholder="Search for restaurants, dishes or cuisine..."
            className="flex-1 bg-transparent outline-none text-gray-700 px-4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="text-gray-500 text-xl">🔍</span>
        </div>

        <p className="text-sm mt-3 opacity-80">
          Use the search bar to filter restaurants instantly.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["Filters", "Offers", "Rating: 4.5+", "Pet friendly", "Outdoor seating", "Serves Alcohol", "Open Now"]
          .map((item) => (
            <button
              key={item}
              className="px-4 py-2 border rounded-full text-gray-700 bg-white shadow-sm hover:bg-gray-100"
            >
              {item}
            </button>
          ))}
      </div>

      {/* RESTAURANTS */}
      <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
        Restaurants Near You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}

        {filteredRestaurants.length === 0 && (
          <div className="text-gray-500 text-lg">No restaurants found.</div>
        )}
      </div>

      {/* EXPLORE OPTIONS SECTION */}
      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-6">Explore options near me</h2>

        {[
          {
            title: "Popular cuisines near me",
            items: ["Biryani near me", "Pizza near me", "Burger near me", "North Indian near me", "Chinese near me"]
          },
          {
            title: "Popular restaurant types near me",
            items: ["Fine Dining", "Cafés", "Quick Bites", "Bakeries", "Bars & Pubs"]
          },
          {
            title: "Explore Dining Cities at Zomato",
            items: ["Kochi Restaurants", "Bangalore Restaurants", "Chennai Restaurants", "Hyderabad Restaurants"]
          },
          {
            title: "Restaurants in Popular Locations",
            items: ["MG Road", "Edappally", "Fort Kochi", "Kakkanad", "Marine Drive"]
          },
          {
            title: "Discover More Fun",
            items: ["Nightlife", "Trending This Week", "Best of Kochi", "Newly Opened"]
          }
        ].map((section, index) => (
          <details
            key={index}
            className="bg-white p-5 rounded-xl shadow-sm border mb-4 cursor-pointer"
          >
            <summary className="text-lg font-semibold flex justify-between items-center">
              {section.title}
              <span className="text-gray-500">⌄</span>
            </summary>

            <ul className="mt-3 pl-3 list-disc text-gray-700">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-50 mt-20 pt-12 pb-16 border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6">

          <div>
            <h3 className="text-sm font-bold mb-3">ABOUT ZOMATO</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3">ZOMAVERSE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>District</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomato Live</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3">FOR RESTAURANTS</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3">LEARN MORE</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3">SOCIAL LINKS</h3>
            <div className="flex gap-3 text-xl mb-4">
              <span>📸</span>
              <span>📘</span>
              <span>🎥</span>
              <span>🐦</span>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              className="h-10 mb-3"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_2022_logo.svg"
              className="h-10"
            />
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          © 2025 Zomato™ Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
