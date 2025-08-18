// src/app/events/page.tsx
"use client";

import { useState, useEffect } from "react";
import EventContents, { Event } from "../../../features/events/components/EventContents";

// --- イベントデータ ---
async function getEvents(): Promise<Event[]> {
  return [
    {
      id: 1,
      title: "夏メル",
      date: "8月上旬",
      location: "土浦CLUB GOLD",
      imageUrl: "/next.svg",
      description: "一年生の初参加イベント高レベルショーケース盛り沢山",
      tags: ["ダンス", "ショーケース", ],
    },
    {
      id: 2,
      title: "イベントB",
      date: "2025-06-15",
      location: "大阪",
      imageUrl: "/vercel.svvg",
      description: "大阪の有名なマラソン大会です。",
      tags: ["ダンス", "バトル"],
    },
    {
      id: 3,
      title: "イベントC",
      date: "2025-07-20",
      location: "名古屋",
      imageUrl: "/window.svg",
      description: "名古屋で夏祭りが開催されます。",
      tags: ["ダンス","ショーケース", "外部"],
    },
    {
      id: 4,
      title: "イベントD",
      date: "2025-08-05",
      location: "札幌",
      imageUrl: "/window.svg",
      description: "北海道で行われるビールフェスティバル。",
      tags: ["交流会", "外部"],
    },
    {
      id: 5,
      title: "イベントE",
      date: "2025-09-10",
      location: "福岡",
      imageUrl: "/Lockかずき１.png",
      description: "福岡の伝統的な踊りイベントです。",
      tags: ["ダンス", "バトル"],
    },
    {
      id: 6,
      title: "イベントF",
      date: "2025-10-15",
      location: "沖縄",
      imageUrl: "/Lockかずき１.png",
      description: "沖縄の文化を体験できるフェスティバル。",
      tags: ["ダンス", "ショーケース","バトル"],
    },
    {
      id: 7,
      title: "イベントG",
      date: "2025-11-20",
      location: "京都",
      imageUrl: "/Lockかずき１.png",
      description: "紅葉の京都で行われる特別な展示会。",
      // tagsなし
    },
  ];
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getEvents();
      setEvents(data);
    })();
  }, []);

  // --- タグ一覧をユニーク化して取得 ---
  const allTags = Array.from(
    new Set(events.flatMap((e) => e.tags || []))
  );

  // --- フィルタリング ---
  const filteredEvents = selectedTag
    ? events.filter((e) => e.tags?.includes(selectedTag))
    : events;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">イベント一覧</h1>

      {/* フィルター欄 */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded-full text-sm border ${
            selectedTag === null
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          すべて
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm border ${
              selectedTag === tag
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* イベント一覧 */}
      <EventContents events={filteredEvents} onTagClick={setSelectedTag} />
    </main>
  );
}
