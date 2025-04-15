export default function TestPage() {
    return 
    /**
 * カレンダーの1日を表すための型の一例
 */
interface CalendarDate {
  date: Date;         // 実際のDateオブジェクト
  isCurrentMonth: boolean; // カレンダーの表示対象の月に含まれているか
}

/**
 * 指定した年・月のカレンダーを2次元配列として返す
 * @param year 年 (例: 2025)
 * @param month 月 (0-11) ※JavaScriptのDateオブジェクトでは 0=1月, 11=12月
 * @param startOfWeek 週の開始曜日 (0=日曜日, 1=月曜日 ... 6=土曜日)
 * @returns 2次元配列 (week行 × 7列)
 */
function generateCalendar(
  year: number,
  month: number,
  startOfWeek: number = 0
): CalendarDate[][] {
  // 当月の最初の日 (1日)を表すDate
  const firstDayOfMonth = new Date(year, month, 1);
  // 当月の最後の日 (例: 31日や30日など)
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // 当月の最初の日の曜日
  const firstDayWeekday = (firstDayOfMonth.getDay() - startOfWeek + 7) % 7;
  // 当月の日数
  const daysInMonth = lastDayOfMonth.getDate();

  // カレンダーの最初に表示される日を特定する
  // 例: 月曜日始まりの場合、月初が水曜なら先週の月曜〜火曜分を前月の日付として表示する必要がある
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(1 - firstDayWeekday);

  // 返却用の配列 (週ごとの配列)
  const weeks: CalendarDate[][] = [];

  // 1週間7日をループさせながら必要分の日付データを生成
  // カレンダーには少なくとも4週、多くて6週くらいが表示されます
  let currentDate = startDate;
  while (true) {
    const week: CalendarDate[] = [];

    // 各週(7日)分を生成
    for (let i = 0; i < 7; i++) {
      // currentDateをクローンする
      const dateObj = new Date(currentDate);
      week.push({
        date: dateObj,
        isCurrentMonth: dateObj.getMonth() === month,
      });
      // 日付を1日進める
      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(week);

    // 最後の日が当月を超えていた場合、ループを抜ける
    // 「週の最後の要素(week[6])の月」が現在の月ではなくなったら終了、などでもOK
    // ここでは startOfWeek にかかわらず 「現在の日付が当月最終日より先なら終了」とするシンプルな実装
    if (currentDate > lastDayOfMonth && currentDate.getMonth() !== month) {
      break;
    }
  }

  return weeks;
}

// 使い方: 2025年4月のカレンダーを生成 (週の開始曜日は日曜日)
const calendarData = generateCalendar(2025, 3); // 3 は 4月 (0始まりのため)
console.log(calendarData);
}