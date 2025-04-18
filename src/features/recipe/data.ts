import type { Category } from "./schemas";

export const recipes: Category[] = [
  {
    name: "主食",
    id: "main",
    items: [
      { name: "おかゆ", date: "2024-12-22", status: "好き", ingredients: ["お米"] },
      { name: "食パンおかゆ", date: "2025-02-03", status: "好き", ingredients: ["食パン"] },
      { name: "鰹節おかゆ", date: "2025-02-17", status: "好き", ingredients: ["お米", "鰹節"] },
      { name: "おこめぼーミルクがゆ", date: "2025-02-22", status: "好き", ingredients: ["おこめぼー", "粉ミルク"] },
      { name: "蒸しパン", date: "2025-04-14", status: "好き", ingredients: ["小麦粉", "牛乳"] },
    ],
  },
  {
    name: "おかず",
    id: "side",
    items: [
      { name: "しらすピーマン", date: "2025-03-11", status: "好き", ingredients: ["しらす", "ピーマン"] },
      { name: "茶碗蒸し", date: "2025-04-06", status: "好き", ingredients: ["卵", "和風だし"] },
      { name: "湯豆腐", date: "2025-04-11", status: "好き", ingredients: ["豆腐", "和風だし"] },
      { name: "豆腐茶碗蒸し", date: "2025-04-13", status: "好き", ingredients: ["卵", "豆腐", "和風だし"] },
    ],
  },
  {
    name: "スープ",
    id: "soup",
    items: [
      { name: "卵スープ", date: "2025-03-10", status: "好き", ingredients: ["卵", "万能ねぎ"] },
      { name: "トマトと卵のスープ", date: "2025-03-17", status: "好き", ingredients: ["卵", "トマト"] },
      { name: "きゅうりと卵のスープ", date: "2025-03-24", status: "好き", ingredients: ["卵", "きゅうり"] },
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
    items: [
      { name: "薄めりんごジュース", date: "2025-02-12", status: "好き", ingredients: ["お湯", "りんごジュース"] },
      { name: "薄め麦茶", date: "2025-03-01", status: "好き", ingredients: ["お湯", "麦茶"] },
    ],
  },
  {
    name: "味付け",
    id: "flavoring",
    items: [{ name: "ホワイトソース", date: "2025-03-03", status: "好き", ingredients: ["牛乳", "小麦粉", "バター", "コンソメ"] }],
  },
];
