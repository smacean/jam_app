"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link href="/calendar">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 transform transition-all duration-300 ease-in-out hover:scale-105 text-sm">
          カレンダーページへ
        </button>
      </Link>
    </div>
  );
}
