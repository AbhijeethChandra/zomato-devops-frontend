// src/pages/Login.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder auth — replace with real logic later
    if (!email || !password) {
      alert("Enter email and password (any values accepted for now)");
      return;
    }
    // On success, navigate home
    navigate("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Log in to Zomato-ish</h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block">
            <div className="text-sm text-gray-600">Email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded"
              required
            />
          </label>

          <label className="block">
            <div className="text-sm text-gray-600">Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border rounded"
              required
            />
          </label>

          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 bg-rose-500 text-white rounded">Login</button>
            <button type="button" onClick={() => navigate("/")} className="text-sm text-gray-600">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
