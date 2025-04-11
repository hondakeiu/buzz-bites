export type Schedule = {
  week: string;
  meals: Meal[];
  stock: Item[][];
};

export type Meal = {
  name: string;
  total?: string;
  items: Item[];
};

export type Item = {
  name: string;
  amount?: string;
  variants?: Variant[];
  prepare?: boolean;
  recipe?: boolean;
};

export type Variant = {
  name: string;
  amount: string;
  tag?: string;
};
