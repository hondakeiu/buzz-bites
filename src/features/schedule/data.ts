import type { Schedule } from "./schemas";

export const schedules: Schedule[] = [
  {
    week: "6m3w",
    meals: [
      {
        name: "昼+夜",
        total: "60g+30g",
        items: [
          { name: "おかゆ・麩", amount: "30g+15g" },
          { name: "野菜・果物", amount: "10g+10g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "魚", amount: "10g" },
              { name: "豆腐", amount: "15g" },
              { name: "卵黄", amount: "15g" },
              { name: "ヨーグルト", amount: "40g" },
            ],
          },
        ],
      },
    ],
    stock: [
      { name: "おかゆ", amount: "300g", recipe: true },
      { name: "麩", amount: "15g" },
      { name: "鯛", amount: "30g" },
      { name: "にんじん", amount: "15g" },
      { name: "かぼちゃ", amount: "10g" },
      { name: "じゃがいも", amount: "10g" },
      { name: "とうもろこし", amount: "10g" },
      { name: "小松菜", amount: "35g" },
      { name: "キャベツ", amount: "15g" },
      { name: "かぶ", amount: "15g" },
      { name: "いちご", amount: "15g" },
      { name: "デコポン", amount: "15g" },
    ],
  },
  {
    week: "7m0w",
    meals: [
      {
        name: "昼・夜",
        total: "80g-120g",
        items: [
          { name: "おかゆ・うどん", amount: "50g" },
          { name: "野菜・果物", amount: "20g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "魚", amount: "10g" },
              { name: "肉", amount: "10g" },
              { name: "豆", amount: "30g" },
              { name: "卵黄", amount: "15g" },
              { name: "卵白", amount: "1g", tag: "初" },
              { name: "ヨーグルト", amount: "50g" },
            ],
          },
        ],
      },
    ],
    stock: [
      { name: "鰹節おかゆ", amount: "600g", recipe: true },
      { name: "うどん", amount: "100g" },
      { name: "ささみ", amount: "25g" },
      { name: "しらす", amount: "20g" },
      { name: "ツナ（まぐろ水煮）", amount: "15g" },
      { name: "枝豆", amount: "30g" },
      { name: "小松菜", amount: "70g" },
      { name: "にんじん", amount: "30g" },
      { name: "ミニトマト", amount: "30g" },
      { name: "ブロッコリー", amount: "30g" },
      { name: "オクラ", amount: "30g" },
      { name: "かぼちゃ", amount: "20g" },
      { name: "じゃがいも", amount: "20g" },
      { name: "とうもろこし", amount: "20g" },
      { name: "バナナ", amount: "30g" },
    ],
  },
];
