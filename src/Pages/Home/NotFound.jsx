import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      <h1 className="text-7xl font-extrabold text-red-500 drop-shadow-lg">
        404
      </h1>
      <p className="text-2xl mt-2 text-gray-400">Oops! Page not found.</p>
      <p className="text-lg mt-2 text-gray-500">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-red-400 text-white text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        🔙 Go Home
      </button>
    </div>
  );
}

export default NotFound;
