import type { Menu } from "./schemas";

export const menus: Menu[] = [
  {
    date: "2025-02-10",
    meals: [
      {
        name: "昼",
        total: "60g",
        items: [
          [
            { name: "お粥", amount: "30g" },
            { name: "かぼちゃ", amount: "5g" },
            { name: "卵黄", amount: "10g" },
          ],
          [
            { name: "いちご", amount: "5g" },
            { name: "ヨーグルト", amount: "10g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "お粥", amount: "10g" },
            { name: "麩", amount: "5g" },
            { name: "にんじん", amount: "5g" },
            { name: "小松菜", amount: "5g" },
            { name: "鯛", amount: "5g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "お湯", amount: "10ml" }]],
      },
    ],
  },
  {
    date: "2025-02-11",
    meals: [
      {
        name: "昼",
        total: "60g",
        items: [
          [
            { name: "お粥", amount: "30g" },
            { name: "じゃがいも", amount: "5g" },
            { name: "豆腐", amount: "10g" },
          ],
          [
            { name: "ヨーグルト", amount: "10g" },
            { name: "デコポン", amount: "5g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "お粥", amount: "15g" },
            { name: "小松菜", amount: "5g" },
            { name: "かぶ", amount: "5g" },
            { name: "鯛", amount: "5g" },
          ],
        ],
      },
    ],
    memo: ["デコポンヨーグルト半分残し"],
  },
  {
    date: "2025-02-12",
    meals: [
      {
        name: "昼",
        total: "60g",
        items: [
          [
            { name: "お粥", amount: "30g" },
            { name: "とうもろこし", amount: "5g" },
            { name: "キャベツ", amount: "5g" },
            { name: "豆腐", amount: "10g" },
          ],
          [
            { name: "ヨーグルト", amount: "10g" },
            { name: "きなこ", amount: "", unit: "少々" },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "お粥", amount: "10g" },
            { name: "麩", amount: "5g" },
            { name: "小松菜", amount: "5g" },
          ],
          [{ name: "いちご", amount: "5g" }],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "おこめぼー", amount: "2", unit: "本" },
            { name: "お湯", amount: "10ml" },
            { name: "リンゴジュース", amount: "10ml" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-13",
    meals: [
      {
        name: "昼",
        total: "55g",
        items: [
          [
            { name: "お粥", amount: "30g" },
            { name: "にんじん", amount: "5g" },
            { name: "かぶ", amount: "5g" },
            { name: "卵黄", amount: "15g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "お粥", amount: "15g" },
            { name: "小松菜", amount: "5g" },
            { name: "豆腐", amount: "5g" },
          ],
          [{ name: "デコポン", amount: "5g" }],
        ],
      },
    ],
    memo: ["デコポン半分残し"],
  },
  {
    date: "2025-02-14",
    meals: [
      {
        name: "昼",
        total: "60g",
        items: [
          [
            { name: "お粥", amount: "30g" },
            { name: "かぼちゃ", amount: "5g" },
          ],
          [
            { name: "いちご", amount: "5g" },
            { name: "ヨーグルト", amount: "20g" },
            { name: "きなこ", amount: "", unit: "少々" },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "お粥", amount: "10g" },
            { name: "麩", amount: "5g" },
            { name: "小松菜", amount: "5g" },
            { name: "キャベツ", amount: "5g" },
            { name: "鯛", amount: "5g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "お湯", amount: "20ml" },
            { name: "リンゴジュース", amount: "20ml" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-15",
    meals: [
      {
        name: "昼",
        total: "55g",
        items: [
          [
            { name: "お粥", amount: "30g" },
            { name: "小松菜", amount: "5g" },
            { name: "とうもろこし", amount: "5g" },
            { name: "豆腐", amount: "15g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "お粥", amount: "15g" },
            { name: "キャベツ", amount: "5g" },
            { name: "鯛", amount: "5g" },
          ],
          [{ name: "デコポン", amount: "5g" }],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "お湯", amount: "10ml" },
            { name: "リンゴジュース", amount: "10ml" },
          ],
        ],
      },
    ],
    memo: ["デコポン半分残し"],
  },
  {
    date: "2025-02-16",
    meals: [
      {
        name: "昼",
        total: "60g",
        items: [
          [
            { name: "お粥", amount: "30g" },
            { name: "にんじん", amount: "5g" },
            { name: "小松菜", amount: "5g" },
          ],
          [
            { name: "ヨーグルト", amount: "20g" },
            { name: "きなこ", amount: "", unit: "少々" },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "お粥", amount: "15g" },
            { name: "じゃがいも", amount: "5g" },
            { name: "かぶ", amount: "5g" },
            { name: "鯛", amount: "5g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-17",
    meals: [
      {
        name: "昼",
        total: "85g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "卵黄", amount: "15g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "100g",
        items: [
          [
            { name: "お粥", amount: "25g" },
            { name: "うどん", amount: "25g" },
            { name: "小松菜", amount: "10g" },
            { name: "しらす", amount: "5g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "ヨーグルト", amount: "25g" },
            { name: "きなこ", amount: "", unit: "少々" },
          ],
        ],
      },
    ],
    memo: ["今日から離乳食中期 🍚", "卵黄OK👌🏻"],
  },
  {
    date: "2025-02-18",
    meals: [
      {
        name: "昼",
        total: "100g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "トマト", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [
            { name: "ヨーグルト", amount: "25g" },
            { name: "きなこ", amount: "", unit: "少々" },
          ],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "小松菜", amount: "10g" },
            { name: "しらす", amount: "5g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "25g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-19",
    meals: [
      {
        name: "昼",
        total: "100g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "小松菜", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "ヨーグルト", amount: "25g" },
            { name: "きなこ", amount: "", unit: "少々" },
          ],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "お粥", amount: "25g" },
            { name: "うどん", amount: "25g" },
            { name: "ツナ（まぐろ水煮）", amount: "5g" },
            { name: "枝豆", amount: "15g" },
          ],
          [
            { name: "かぼちゃ", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-20",
    meals: [
      {
        name: "昼",
        total: "86g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "にんじん", amount: "10g" },
            { name: "小松菜", amount: "10g" },
            { name: "卵黄", amount: "15g" },
            { name: "卵白", amount: "1g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "トマト", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "5g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-21",
    meals: [
      {
        name: "昼",
        total: "100g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [
            { name: "ヨーグルト", amount: "25g" },
            { name: "きなこ", amount: "", unit: "少々" },
          ],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "お粥", amount: "25g" },
            { name: "うどん", amount: "25g" },
            { name: "小松菜", amount: "10g" },
            { name: "しらす", amount: "5g" },
          ],
          [
            { name: "とうもろこし", amount: "10g" },
            { name: "豆腐", amount: "15g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-22",
    meals: [
      {
        name: "昼",
        total: "100g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "小松菜", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "ヨーグルト", amount: "25g" },
            { name: "きなこ", amount: "", unit: "少々" },
          ],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "にんじん", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "5g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-23",
    meals: [
      {
        name: "昼",
        total: "90g",
        items: [
          [
            { name: "お粥", amount: "50g" },
            { name: "小松菜", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "しらす", amount: "5g" },
            { name: "枝豆", amount: "15g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "85g",
        items: [
          [
            { name: "お粥", amount: "25g" },
            { name: "うどん", amount: "25g" },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "卵黄", amount: "15g" },
          ],
        ],
      },
    ],
  },
];
