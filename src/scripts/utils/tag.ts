import { foods } from "../../features/food/data";
import { recipes } from "../../features/recipe/data";
import { getWeekStart } from "./calendar";

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

export const checkNewRecipe = (name: string, date: string) => {
  for (const category of recipes) {
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

export const checkNewSchedule = (name: string, week: string, type: "food" | "recipe") => {
  const start = getWeekStart(week);
  console.log(start);
  for (const category of type === "food" ? foods : recipes) {
    const item = category.items.find((item) => item.name === name);
    if (item && !item.date) {
      return "初";
    }
    if (item && item.date && start && start <= item.date) {
      return "初";
    }
  }
};
