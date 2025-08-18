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
        <Link
          key={event.id}
          href={`/events/${event.id}`}
          className="w-full max-w-[300px] h-[400px]"
        >
          <div
            className="border rounded-lg shadow p-2 flex flex-col items-center cursor-pointer hover:shadow-lg transition-transform duration-200 hover:scale-105"
            style={{ width: "100%", height: "100%" }}
          >
            {/* 画像 */}
            <div className="relative w-full h-[180px] mb-2 rounded overflow-hidden bg-gray-100">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>

            {/* 本文エリア */}
            <div className="flex flex-col w-full px-2 flex-1">
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
                {event.description.length > 70
                  ? event.description.slice(0, 70) + "…"
                  : event.description}
              </p>

              {/* 詳細ボタンは削除 */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
