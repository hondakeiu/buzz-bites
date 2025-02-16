export type Menu = {
  date: string;
  meals: Meal[];
  memo?: string[];
};

export type Meal = {
  name: string;
  total?: string;
  items: Item[][];
};

export type Item = {
  name: string;
  amount: string;
  unit?: string;
};
