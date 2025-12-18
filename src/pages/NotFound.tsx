// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-gray-600 mb-6">Page not found.</p>
        <Link to="/" className="inline-block px-4 py-2 rounded bg-brand-500 text-white">
          Back to home
        </Link>
      </div>
    </div>
  );
}
