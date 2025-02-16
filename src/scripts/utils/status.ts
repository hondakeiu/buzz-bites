import { foods } from "../../features/foods/data";
import type { Category } from "../../features/foods/schemas";

export const getFoodStatus = (foodName: string) => {
  for (const category of foods) {
    const foundItem = category.items.find((item) => item.name === foodName);
    if (foundItem) {
      return foundItem.status;
    }
  }
  return null;
};

export const getStatusHeartColor = (status: string | null) => {
  if (status === "好き") {
    return "r";
  } else if (status === "普通") {
    return "o";
  } else if (status === "嫌い") {
    return "b";
  } else {
    return "g";
  }
};
