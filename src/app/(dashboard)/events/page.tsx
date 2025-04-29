// src/app/(dashboard)/events/page.tsx
import React from "react";

const events = [
  { id: 1, title: "イベント1", date: "2025-05-01" },
  { id: 2, title: "イベント2", date: "2025-05-05" },
  { id: 3, title: "イベント3", date: "2025-05-10" },
];

export default function EventsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">イベント一覧</h1>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="border p-2 rounded">
            <h2 className="text-xl">{event.title}</h2>
            <p className="text-gray-600">{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
