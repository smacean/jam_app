// イベント詳細作成ページ
// app/events/create/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEventPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  // フォーム送信時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ここでAPIにPOSTリクエストを送る
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date, location }),
    });

    // 登録後、一覧ページに移動
    router.push("/events");
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">イベント作成</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <label className="block mb-2 font-semibold">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">日付</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">場所</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          作成する
        </button>
      </form>
    </main>
  );
}
