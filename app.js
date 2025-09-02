import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Hello, React!</h1>
        <p className="text-gray-600 mb-4">
          This is a simple frontend page built with React and TailwindCSS.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
  );
}