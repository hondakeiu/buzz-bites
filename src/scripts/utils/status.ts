import { foods } from "../../features/food/data";
import type { Category } from "../../features/food/schemas";
import { recipes } from "../../features/recipe/data";

export const getFoodStatus = (foodName: string) => {
  for (const category of foods) {
    const foundItem = category.items.find((item) => item.name === foodName);
    if (foundItem) {
      return foundItem.status;
    }
  }
  return null;
};

export const getRecipeStatus = (recipeName: string) => {
  for (const category of recipes) {
    const foundItem = category.items.find((item) => item.name === recipeName);
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
