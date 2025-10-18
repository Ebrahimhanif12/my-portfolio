"use client";
import { useState, useEffect } from "react";

export default function PopupMessage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // show popup after 500ms on initial load
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white p-6 rounded-2xl shadow-2xl max-w-sm text-center">
        <h2 className="text-xl font-semibold mb-2"> Under Construction</h2>
        <p className="text-sm mb-4">
          This website is not completed yet.<br />
          Thank you for your consideration and patience!
        </p>
        <button
          onClick={() => setShow(false)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          OK, Back to website
        </button>
      </div>
    </div>
  );
}
