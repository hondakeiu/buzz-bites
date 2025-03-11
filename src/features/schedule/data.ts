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
      [
        { name: "おかゆ", amount: "300g", recipe: true },
        { name: "麩", amount: "15g" },
      ],
      [
        { name: "小松菜", amount: "35g" },
        { name: "にんじん", amount: "15g" },
        { name: "キャベツ", amount: "15g" },
        { name: "かぶ", amount: "15g" },
        { name: "かぼちゃ", amount: "10g" },
        { name: "じゃがいも", amount: "10g" },
        { name: "とうもろこし", amount: "10g" },
        { name: "いちご", amount: "15g" },
        { name: "デコポン", amount: "15g" },
      ],
      [{ name: "鯛", amount: "30g" }],
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
              { name: "肉", amount: "10g" },
              { name: "魚", amount: "10g" },
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
      [
        { name: "鰹節おかゆ", amount: "600g", recipe: true },
        { name: "うどん", amount: "100g" },
      ],
      [
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
      [
        { name: "ささみ", amount: "25g" },
        { name: "しらす", amount: "20g" },
        { name: "ツナ（まぐろ水煮）", amount: "15g" },
        { name: "枝豆", amount: "30g" },
      ],
    ],
  },
  {
    week: "7m1w",
    meals: [
      {
        name: "昼・夜",
        total: "85g-130g",
        items: [
          { name: "おかゆ・パン", amount: "55g" },
          { name: "野菜・果物", amount: "20g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "10g" },
              { name: "魚", amount: "10g" },
              { name: "豆", amount: "30g" },
              { name: "卵黄", amount: "15g" },
              { name: "卵白", amount: "2-3g" },
              { name: "ヨーグルト", amount: "55g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [
        { name: "鰹節おかゆ", amount: "670g", recipe: true },
        { name: "食パンおかゆ", amount: "100g", recipe: true },
      ],
      [
        { name: "ほうれん草", amount: "40g" },
        { name: "にんじん", amount: "30g" },
        { name: "ミニトマト", amount: "30g" },
        { name: "レタス", amount: "30g" },
        { name: "ズッキーニ", amount: "30g" },
        { name: "いんげん", amount: "30g" },
        { name: "かぼちゃ", amount: "20g" },
        { name: "さといも", amount: "20g" },
        { name: "じゃがいも", amount: "10g" },
        { name: "とうもろこし", amount: "10g" },
        { name: "ぶどう", amount: "30g" },
      ],
      [
        { name: "ささみ", amount: "35g" },
        { name: "かつお", amount: "25g" },
      ],
    ],
  },
  {
    week: "7m2w",
    meals: [
      {
        name: "昼・夜",
        total: "95g-145g",
        items: [
          { name: "おかゆ", amount: "60g" },
          { name: "野菜・果物", amount: "25g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "10g" },
              { name: "魚", amount: "10g" },
              { name: "豆", amount: "35g" },
              { name: "卵黄", amount: "15g" },
              { name: "卵白", amount: "5-7g" },
              { name: "乳", amount: "60g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "おかゆ", amount: "840g", recipe: true }],
      [
        { name: "小松菜", amount: "60g" },
        { name: "トマト", amount: "60g" },
        { name: "にんじん", amount: "45g" },
        { name: "ブロッコリー", amount: "45g" },
        { name: "なす", amount: "30g" },
        { name: "かぼちゃ", amount: "20g" },
        { name: "じゃがいも", amount: "20g" },
        { name: "とうもろこし", amount: "20g" },
        { name: "いんげん", amount: "20g" },
        { name: "バナナ", amount: "30g" },
      ],
      [
        { name: "鶏むね肉", amount: "25g" },
        { name: "サーモン", amount: "20g" },
        { name: "しらす", amount: "15g" },
      ],
      [{ name: "ホワイトソース", amount: "40g", recipe: true }],
    ],
  },
  {
    week: "7m3w",
    meals: [
      {
        name: "昼・夜",
        total: "100g-155g",
        items: [
          { name: "おかゆ", amount: "65g" },
          { name: "野菜・果物", amount: "25g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "10g" },
              { name: "魚", amount: "10g" },
              { name: "豆", amount: "40g" },
              { name: "卵黄", amount: "15g" },
              { name: "卵白", amount: "7-10g" },
              { name: "乳", amount: "65g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "鰹節おかゆ", amount: "910g", recipe: true }],
      [
        { name: "小松菜", amount: "60g" },
        { name: "トマト", amount: "60g" },
        { name: "にんじん", amount: "45g" },
        { name: "カリフラワー", amount: "45g" },
        { name: "チンゲン菜", amount: "30g" },
        { name: "しらすピーマン", amount: "30g", recipe: true },
        { name: "かぼちゃ", amount: "20g" },
        { name: "とうもろこし", amount: "20g" },
        { name: "じゃがいも", amount: "10g" },
        { name: "いちご", amount: "30g" },
      ],
      [
        { name: "鶏むね肉", amount: "25g" },
        { name: "まぐろ", amount: "20g" },
        { name: "しらす", amount: "15g" },
      ],
      [{ name: "卵スープ", amount: "105g", recipe: true }],
    ],
  },
];
