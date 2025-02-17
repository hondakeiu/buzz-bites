import type { Category } from "./schemas";

export const recipes: Category[] = [
  {
    name: "主食",
    id: "main",
    items: [
      { name: "おかゆ", date: "2024-12-22", status: "好き", ingredients: ["お米"] },
      { name: "鰹節おかゆ", date: "2025-02-17", status: "好き", ingredients: ["お米", "鰹節"] },
    ],
  },
  {
    name: "デザート",
    id: "dessert",
    items: [{ name: "きなこヨーグルト", date: "2025-02-12", status: "好き", ingredients: ["ヨーグルト", "きなこ"] }],
  },
  {
    name: "飲み物",
    id: "drink",
    items: [{ name: "薄めりんごジュース", date: "2025-02-12", status: "好き", ingredients: ["お湯", "りんごジュース"] }],
  },
];
