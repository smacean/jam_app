// src/app/(dashboard)/events/[id]/page.tsx
import React from "react";

// 仮のイベントデータ（画像URLも追加）
const events = [
  {
    id: "1",
    title: "イベント1",
    date: "2025-05-01",
    description: "これはイベント1の詳細説明です。楽しいアクティビティが盛りだくさん！",
    imageUrl: "https://source.unsplash.com/featured/?event,party", // ランダムなイベント画像
  },
  {
    id: "2",
    title: "イベント2",
    date: "2025-05-05",
    description: "これはイベント2の詳細説明です。家族で楽しめる催しもあります。",
    imageUrl: "https://source.unsplash.com/featured/?event,festival",
  },
  {
    id: "3",
    title: "イベント3",
    date: "2025-05-10",
    description: "これはイベント3の詳細説明です。特別ゲストのライブも！",
    imageUrl: "https://source.unsplash.com/featured/?event,concert",
  },
];

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">イベントが見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <p className="text-gray-500 mb-2">{event.date}</p>
          <p className="text-gray-700">{event.description}</p>
        </div>
      </div>
    </div>
  );
}
