import React from "react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="  bg-white  p-8 rounded-lg shadow-lg text-center justify-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Registered Successfullu!
        </h1>
        <p className="text-gray-700 mb-6">
          Your registration was successful. You can now log in to manage your
          profile.
        </p>
        <Link
          to="/login"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
