// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 rounded-md bg-rose-400 text-white flex items-center justify-center font-bold">Z</div>
            <div className="text-lg font-semibold text-gray-800">Zomato-ish</div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/collections" className="text-gray-700 hover:text-gray-900">Collections</Link>
          <Link to="/delivery" className="text-gray-700 hover:text-gray-900">Delivery</Link>
          <Link to="/dining-out" className="text-gray-700 hover:text-gray-900">Dining Out</Link>

          {/* IMPORTANT: use Link to navigate without reload */}
          <Link to="/login" className="px-4 py-2 border rounded-full text-gray-700 hover:bg-gray-50">
            Login
          </Link>

          <Link to="/get-app" className="px-4 py-2 bg-rose-500 text-white rounded-full shadow">Get App</Link>
        </div>
      </div>
    </nav>
  );
}
