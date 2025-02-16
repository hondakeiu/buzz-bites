import { foods } from "../../features/foods/data";

export const checkNewFood = (name: string, date: string) => {
  for (const category of foods) {
    const item = category.items.find((item) => item.name === name);
    if (item && !item.date) {
      return "新";
    }
    if (item && item.date) {
      if (date == item.date) {
        return "初";
      }
    }
  }
};
