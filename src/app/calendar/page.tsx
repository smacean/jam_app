'use client';
import { useCallback } from "react";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // プラグインのインポート
import allLocales from '@fullcalendar/core/locales-all.js';

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
};

export default function Calendar() {
  const month = thisMonth(); // thisMonth関数を呼び出して現在の年月を取得
  const handleDateClick = useCallback((arg: DateClickArg) => {
    alert(arg.dateStr)
  }, []);

  return (
    <div className="w-[600px] mx-auto">
      <FullCalendar
        //plugins={[dayGridPlugin]}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"

        // 日本語の指定
        locales={allLocales}
        locale="ja"
        
        // 仮イベントの導入
        events={[
          { title: "event 1", date: `${month}-01` }, // thisMonth()の結果を埋め込む
          { title: "event 2", date: `${month}-02` }, // 同様に動的に日付を指定
        ]}

        // click機能
        dateClick={handleDateClick}
      />
    </div>
  );
}
