// src/components/layouts/header/header.tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="mx-auto max-w-[960px] flex items-center justify-between p-4">
        {/* 左側：ロゴ */}
        <div
          className="text-lg font-bold text-blue-600 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Realjam公式
        </div>

        {/* 右側：適当なメニュー */}
        <ul className="flex gap-6 text-sm text-zinc-700">
          <li className="hover:text-blue-600 cursor-pointer">Top</li>
          <li className="hover:text-blue-600 cursor-pointer">カレンダー</li>
          <li className="hover:text-blue-600 cursor-pointer">イベント一覧</li>
          <li className="hover:text-blue-600 cursor-pointer">ログイン</li>
        </ul>
      </nav>
    </header>
  );
}
