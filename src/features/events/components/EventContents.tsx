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
  tags?: string[];
};

type Props = {
  events: Event[];
  onTagClick?: (tag: string) => void;
};

export default function EventContents({ events, onTagClick }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
      {events.map((event) => (
        <Link
          key={event.id}
          href={`/events/${event.id}/edit`}
          className="w-full max-w-[300px] h-[420px]"
        >
          <div className="border rounded-lg shadow p-2 flex flex-col items-center cursor-pointer hover:shadow-lg transition-transform duration-200 hover:scale-105">
            {/* 画像 */}
            <div className="relative w-full h-[180px] mb-2 rounded overflow-hidden bg-gray-100">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>

            {/* 本文エリア */}
            <div className="flex flex-col w-full px-2 flex-1">
              <h2 className="text-xl font-bold leading-snug truncate">
                {event.title}
              </h2>
              <p className="text-sm text-gray-500 truncate">
                {event.date} - {event.location}
              </p>
              <p className="text-sm text-gray-700 mt-1 line-clamp-3">
                {event.description}
              </p>

              {/* タグ */}
              <div className="flex flex-wrap gap-2 mt-2">
                {event.tags?.map((tag) => (
                  <button
                    key={tag}
                    onClick={(e) => {
                      e.preventDefault(); // Link遷移を防ぐ
                      onTagClick?.(tag);
                    }}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
