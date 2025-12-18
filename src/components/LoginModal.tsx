interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // you could later add real auth here
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>

        <h2 className="text-2xl font-extrabold mb-2 text-gray-800">
          Welcome back
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Login to continue ordering your favourites.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg transition shadow"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Demo only – no real account required.
        </p>
      </div>
    </div>
  );
}
