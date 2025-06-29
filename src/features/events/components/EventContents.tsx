// src/features/events/components/EventContents.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
};

type Props = {
  events: Event[];
};

export default function EventContents({ events }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
      {events.map((event) => (
        <div
          key={event.id}
          className="border rounded-lg shadow p-2 flex flex-col items-center"
          style={{ maxWidth: "300px", maxHeight: "300px", width: "100%" }}
        >
          {/* 画像 */}
          <div className="relative w-full h-[120px] mb-2 rounded overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw"
            />
          </div>

          {/* 本文エリア */}
          <div className="flex flex-col w-full px-2">
            {/* タイトル */}
            <h2 className="text-xl font-bold leading-snug truncate">
              {event.title}
            </h2>

            {/* 日付・場所 */}
            <p className="text-sm text-gray-500 truncate">
              {event.date.length > 10
                ? event.date.slice(0, 10) + "…"
                : event.date}{" "}
              -{" "}
              {event.location.length > 10
                ? event.location.slice(0, 10) + "…"
                : event.location}
            </p>

            {/* 説明文 */}
            <p className="text-sm text-gray-700 mt-1 line-clamp-3">
              {event.description}
            </p>

            {/* 詳細ボタン */}
            <div className="flex justify-end mt-auto pt-2">
              <Link href={`/events/${event.id}`}>
                <button className="bg-blue-500 text-white text-xs rounded w-10 h-8">
                  詳細
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
