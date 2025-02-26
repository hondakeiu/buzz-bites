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
            { name: "おかゆ", amount: "30g", recipe: true },
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
            { name: "おかゆ", amount: "10g", recipe: true },
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
            { name: "おかゆ", amount: "30g", recipe: true },
            { name: "じゃがいも", amount: "5g" },
            { name: "豆腐", amount: "10g" },
          ],
          [
            { name: "デコポン", amount: "5g" },
            { name: "ヨーグルト", amount: "10g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "おかゆ", amount: "15g", recipe: true },
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
            { name: "おかゆ", amount: "30g", recipe: true },
            { name: "とうもろこし", amount: "5g" },
            { name: "キャベツ", amount: "5g" },
            { name: "豆腐", amount: "10g" },
          ],
          [{ name: "きなこヨーグルト", amount: "10g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "おかゆ", amount: "10g", recipe: true },
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
            { name: "薄めりんごジュース", amount: "20ml", recipe: true },
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
            { name: "おかゆ", amount: "30g", recipe: true },
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
            { name: "おかゆ", amount: "15g", recipe: true },
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
            { name: "おかゆ", amount: "30g", recipe: true },
            { name: "かぼちゃ", amount: "5g" },
          ],
          [
            { name: "いちご", amount: "5g" },
            { name: "きなこヨーグルト", amount: "20g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "おかゆ", amount: "10g", recipe: true },
            { name: "麩", amount: "5g" },
            { name: "小松菜", amount: "5g" },
            { name: "キャベツ", amount: "5g" },
            { name: "鯛", amount: "5g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めりんごジュース", amount: "40ml", recipe: true }]],
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
            { name: "おかゆ", amount: "30g", recipe: true },
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
            { name: "おかゆ", amount: "15g", recipe: true },
            { name: "キャベツ", amount: "5g" },
            { name: "鯛", amount: "5g" },
          ],
          [{ name: "デコポン", amount: "5g" }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めりんごジュース", amount: "20ml", recipe: true }]],
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
            { name: "おかゆ", amount: "30g", recipe: true },
            { name: "にんじん", amount: "5g" },
            { name: "小松菜", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "20g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "30g",
        items: [
          [
            { name: "おかゆ", amount: "15g", recipe: true },
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
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "卵黄", amount: "15g" },
            { name: "コンソメ", amount: "", unit: "少々" },
          ],
        ],
      },
      {
        name: "夜",
        total: "100g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "25g", recipe: true },
            { name: "うどん", amount: "25g" },
            { name: "小松菜", amount: "10g" },
            { name: "しらす", amount: "5g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
    memo: ["今日から中期 🍚", "卵黄OK👌🏻", "量が増えて2分チンしても足りなくて、1分追加したら爆発した"],
  },
  {
    date: "2025-02-18",
    meals: [
      {
        name: "昼",
        total: "100g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "ミニミニトマト", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "しらす", amount: "5g" },
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
    date: "2025-02-19",
    meals: [
      {
        name: "昼",
        total: "100g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "25g", recipe: true },
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
      {
        name: "その他",
        items: [
          [
            { name: "おこめぼー", amount: "1", unit: "本" },
            { name: "ジャスミン茶", amount: "", unit: "少々" },
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
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
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
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "ミニトマト", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "5g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "おこめぼー", amount: "", unit: "少々" }]],
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
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "25g", recipe: true },
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
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "90g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "5g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "おこめぼー", amount: "5", unit: "本" },
            { name: "薄めリンゴジュース", amount: "40ml", recipe: true },
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
            { name: "鰹節おかゆ", amount: "50g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "しらす", amount: "5g" },
            { name: "枝豆", amount: "15g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "95g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "25g", recipe: true },
            { name: "うどん", amount: "25g" },
            { name: "ミニトマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "ささみ", amount: "5g" },
            { name: "豆腐", amount: "20g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めリンゴジュース", amount: "20ml", recipe: true }]],
      },
    ],
  },
  {
    date: "2025-02-24",
    meals: [
      {
        name: "昼",
        total: "115g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ささみ", amount: "10g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "95g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "30g", recipe: true },
            { name: "食パン", amount: "25g" },
            { name: "ほうれん草", amount: "10g" },
            { name: "里芋", amount: "10g" },
            { name: "かつお", amount: "5g" },
          ],
          [{ name: "納豆", amount: "15g" }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めリンゴジュース", amount: "35ml", recipe: true }]],
      },
    ],
  },
  {
    date: "2025-02-25",
    meals: [
      {
        name: "昼",
        total: "92g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "ミニトマト", amount: "10g" },
            { name: "卵黄", amount: "15g" },
            { name: "卵白", amount: "2g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "105g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ズッキーニ", amount: "10g" },
            { name: "ささみ", amount: "5g" },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [{ name: "きなこヨーグルト", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めリンゴジュース", amount: "40ml", recipe: true }]],
      },
    ],
  },
  {
    date: "2025-02-26",
    meals: [
      {
        name: "昼",
        total: "95g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "じゃがいも", amount: "10g" },
            { name: "いんげん", amount: "10g" },
            { name: "かつお", amount: "5g" },
            { name: "豆腐", amount: "15g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "95g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "30g", recipe: true },
            { name: "食パン", amount: "25g" },
            { name: "にんじん", amount: "10g" },
            { name: "レタス", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [{ name: "納豆", amount: "15g" }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めリンゴジュース", amount: "20ml", recipe: true }]],
      },
    ],
  },
  {
    date: "2025-02-27",
    meals: [
      {
        name: "昼",
        total: "93g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "ズッキーニ", amount: "10g" },
            { name: "卵黄", amount: "15g" },
            { name: "卵白", amount: "3g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "105g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-02-28",
    meals: [
      {
        name: "昼",
        total: "105g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "いんげん", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "95g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "30g", recipe: true },
            { name: "食パン", amount: "25g" },
            { name: "ほうれん草", amount: "10g" },
            { name: "里芋", amount: "10g" },
            { name: "かつお", amount: "5g" },
          ],
          [{ name: "納豆", amount: "15g" }],
        ],
      },
    ],
  },
  {
    date: "2025-03-01",
    meals: [
      {
        name: "昼",
        total: "110g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ズッキーニ", amount: "10g" },
            { name: "かつお", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "30g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "95g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "レタス", amount: "10g" },
            { name: "ミニトマト", amount: "10g" },
            { name: "ささみ", amount: "5g" },
            { name: "豆腐", amount: "15g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-02",
    meals: [
      {
        name: "昼",
        total: "110g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "55g", recipe: true },
            { name: "レタス", amount: "10g" },
            { name: "かつお", amount: "5g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "95g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "30g", recipe: true },
            { name: "食パン", amount: "25g" },
            { name: "ミニトマト", amount: "10g" },
            { name: "いんげん", amount: "10g" },
            { name: "ささみ", amount: "5g" },
            { name: "豆腐", amount: "15g" },
          ],
        ],
      },
    ],
  },
];
