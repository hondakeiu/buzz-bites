import { stages } from "../../features/calendar/data";

export const formatDate = (date: string | null, replace: string) => {
  return date ? date.replace(/-/g, replace) : "";
};

export const getWeekName = (date: string) => {
  const today = new Date(date);
  for (const stage of stages) {
    for (const week of stage.weeks) {
      const start = new Date(week.start);
      const end = new Date(start);
      end.setDate(end.getDate() + 6);
      if (today >= start && today <= end) {
        return week.name;
      }
    }
  }
};

export const getYoubi = (date: string) => {
  const youbi = ["日", "月", "火", "水", "木", "金", "土"];
  return youbi[new Date(date).getDay()];
};

export const getTodaySectionId = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `date-${year}${month}${day}`;
};
