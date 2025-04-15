"use client";

import { useState } from "react";

function generateCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks: (number | null)[][] = [];

  let currentDay = 1 - firstDay;
  while (currentDay <= daysInMonth) {
    const week: (number | null)[] = [];
    for (let i = 0; i < 7; i++) {
      if (currentDay < 1 || currentDay > daysInMonth) {
        week.push(null);
      } else {
        week.push(currentDay);
      }
      currentDay++;
    }
    weeks.push(week);
  }

  return weeks;
}

function Calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const weeks = generateCalendar(year, month);

  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <div className="w-full max-w-md p-4 rounded-xl shadow-xl bg-white">
      <h2 className="text-xl font-bold text-center mb-4">{year}年 {month + 1}月</h2>
      <div className="grid grid-cols-7 text-center font-semibold text-gray-700">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-1">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 text-center text-gray-800 mt-2">
        {weeks.flat().map((day, idx) => (
          <div key={idx} className="py-2 h-10">
            {day ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TestPage() {
  return (
    <div className="grid grid-rows-[50px_1fr_50px] items-top justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-100">
      <div className="text-2xl font-bold">ペニ兄カレンダー</div>
      <Calendar />
    </div>
  );
}
