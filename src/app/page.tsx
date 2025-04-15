import React from 'react';

const Home = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  // 月の日数を取得する関数
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 月の最初の日が何曜日かを取得する関数
  const getStartDay = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
  };

  // カレンダーを構成するデータを作成する関数
  const generateCalendar = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = getStartDay(year, month);

    const weeks: (number | null)[][] = [];
    let currentDay = 1 - startDay;

    for (let week = 0; week < 6; week++) {
      const weekDays: (number | null)[] = [];

      for (let day = 0; day < 7; day++) {
        if (currentDay < 1 || currentDay > daysInMonth) {
          weekDays.push(null);
        } else {
          weekDays.push(currentDay);
        }
        currentDay++;
      }

      weeks.push(weekDays);
    }

    return weeks;
  };

  const weeks = generateCalendar(year, month);

  return (
    <div style={{ padding: '20px' }}>
      <h1>カレンダー</h1>
      <h2>{year}年 {month + 1}月</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
              <th key={day} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  key={j}
                  style={{
                    border: '1px solid #ccc',
                    textAlign: 'center',
                    padding: '10px',
                    height: '40px',
                  }}
                >
                  {day ?? ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
