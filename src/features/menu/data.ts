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
        items: [[{ name: "薄めりんごジュース", amount: "20ml", recipe: true }], [{ name: "薄めりんごジュース", amount: "20ml", recipe: true }]],
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
        items: [[{ name: "おこめぼーミルクがゆ", amount: "25g", recipe: true }], [{ name: "薄めりんごジュース", amount: "40ml", recipe: true }]],
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
        items: [[{ name: "薄めりんごジュース", amount: "20ml", recipe: true }]],
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
            { name: "食パンおかゆ", amount: "25g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "里芋", amount: "10g" },
            { name: "かつお", amount: "5g" },
          ],
          [{ name: "納豆", amount: "15g" }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めりんごジュース", amount: "15ml", recipe: true }], [{ name: "薄めりんごジュース", amount: "20ml", recipe: true }]],
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
        items: [[{ name: "薄めりんごジュース", amount: "20ml", recipe: true }], [{ name: "薄めりんごジュース", amount: "20ml", recipe: true }]],
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
            { name: "食パンおかゆ", amount: "25g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "レタス", amount: "10g" },
            { name: "ささみ", amount: "5g" },
          ],
          [{ name: "納豆", amount: "15g" }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めりんごジュース", amount: "20ml", recipe: true }]],
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
            { name: "粉チーズ", amount: "", unit: "少々" },
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
      {
        name: "その他",
        items: [
          [
            { name: "薄めりんごジュース", amount: "20ml", recipe: true },
            { name: "お湯", amount: "70ml" },
          ],
          [{ name: "おこめぼーミルクがゆ", amount: "40g", recipe: true }],
          [{ name: "お湯", amount: "15ml" }],
          [{ name: "薄めりんごジュース", amount: "10ml", recipe: true }],
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
            { name: "食パンおかゆ", amount: "25g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "里芋", amount: "10g" },
            { name: "かつお", amount: "5g" },
          ],
          [{ name: "納豆", amount: "15g" }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄めりんごジュース", amount: "20ml", recipe: true }]],
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
      {
        name: "その他",
        items: [
          [{ name: "薄めりんごジュース", amount: "20ml", recipe: true }],
          [
            { name: "薄め麦茶", amount: "50ml", recipe: true },
            { name: "おこめぼー", amount: "3", unit: "本" },
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
            { name: "食パンおかゆ", amount: "25g", recipe: true },
            { name: "ミニトマト", amount: "10g" },
            { name: "いんげん", amount: "10g" },
            { name: "ささみ", amount: "5g" },
            { name: "豆腐", amount: "15g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [
          [{ name: "薄めりんごジュース", amount: "15ml", recipe: true }],
          [
            { name: "おこめぼー", amount: "1", unit: "本" },
            { name: "薄め麦茶", amount: "15ml", recipe: true },
          ],
          [{ name: "オレンジ", amount: "4", unit: "かけ" }],
        ],
      },
    ],
  },
  {
    date: "2025-03-03",
    meals: [
      {
        name: "昼",
        total: "120g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "ブロッコリー", amount: "15g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "110g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "小松菜", amount: "15g" },
            { name: "サーモン", amount: "5g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "じゃがいも", amount: "10g" },
            { name: "納豆", amount: "10g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "薄め麦茶", amount: "10ml", recipe: true }]],
      },
    ],
  },
  {
    date: "2025-03-04",
    meals: [
      {
        name: "昼",
        total: "105g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "にんじん", amount: "15g" },
            { name: "かぼちゃ", amount: "10g" },
          ],
          [
            { name: "卵黄", amount: "15g" },
            { name: "卵白", amount: "5g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "110g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "トマト", amount: "15g" },
            { name: "なす", amount: "10g" },
            { name: "しらす", amount: "5g" },
            { name: "豆腐", amount: "20g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-05",
    meals: [
      {
        name: "昼",
        total: "125g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "ブロッコリー", amount: "15g" },
            { name: "サーモン", amount: "5g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "105g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "トマト", amount: "15g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [
            { name: "じゃがいも", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "オレンジ", amount: "4", unit: "かけ" }]],
      },
    ],
  },
  {
    date: "2025-03-06",
    meals: [
      {
        name: "昼",
        total: "107g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "トマト", amount: "15g" },
            { name: "いんげん", amount: "10g" },
            { name: "卵黄", amount: "15g" },
            { name: "卵白", amount: "7g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "110g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "小松菜", amount: "15g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "しらす", amount: "5g" },
            { name: "豆腐", amount: "20g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-07",
    meals: [
      {
        name: "昼",
        total: "120g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "にんじん", amount: "15g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "30g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "110g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "小松菜", amount: "15g" },
            { name: "サーモン", amount: "5g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "いんげん", amount: "10g" },
            { name: "納豆", amount: "10g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-08",
    meals: [
      {
        name: "昼",
        total: "120g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "にんじん", amount: "15g" },
            { name: "しらす", amount: "5g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "110g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "トマト", amount: "15g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "5g" },
            { name: "豆腐", amount: "20g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-09",
    meals: [
      {
        name: "昼",
        total: "120g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "小松菜", amount: "15g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "30g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "115g",
        items: [
          [
            { name: "おかゆ", amount: "60g", recipe: true },
            { name: "ブロッコリー", amount: "15g" },
            { name: "サーモン", amount: "5g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
          ],
          [
            { name: "とうもろこし", amount: "10g" },
            { name: "豆腐", amount: "15g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "いちご", amount: "1/2", unit: "個" }]],
      },
    ],
  },
  {
    date: "2025-03-10",
    meals: [
      {
        name: "昼",
        total: "125g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "トマト", amount: "15g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "125g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "カリフラワー", amount: "15g" },
            { name: "チンゲン菜", amount: "10g" },
            { name: "まぐろ", amount: "5g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "15g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-03-11",
    meals: [
      {
        name: "昼",
        total: "112g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "にんじん", amount: "15g" },
            { name: "しらすピーマン", amount: "10g", recipe: true },
            { name: "卵黄", amount: "15g" },
            { name: "卵白", amount: "7g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "130g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "小松菜", amount: "15g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "しらす", amount: "5g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "15g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-12",
    meals: [
      {
        name: "昼",
        total: "125g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "小松菜", amount: "15g" },
            { name: "まぐろ", amount: "5g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "125g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "トマト", amount: "15g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [
            { name: "じゃがいも", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "15g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "りんごジュース", amount: "55ml" }]],
      },
    ],
  },
  {
    date: "2025-03-13",
    meals: [
      {
        name: "昼",
        total: "115g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "カリフラワー", amount: "15g" },
            { name: "しらすピーマン", amount: "10g", recipe: true },
            { name: "卵黄", amount: "15g" },
            { name: "卵白", amount: "10g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "130g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "にんじん", amount: "15g" },
            { name: "チンゲン菜", amount: "10g" },
            { name: "しらす", amount: "5g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "15g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "お湯", amount: "15ml" }], [{ name: "麦茶", amount: "25ml" }]],
      },
    ],
  },
  {
    date: "2025-03-14",
    meals: [
      {
        name: "昼",
        total: "130g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "小松菜", amount: "15g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "35g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "125g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "トマト", amount: "15g" },
            { name: "チンゲン菜", amount: "10g" },
          ],
          [
            { name: "まぐろ", amount: "5g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "15g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "バナナ", amount: "1/2", unit: "本" }]],
      },
    ],
  },
  {
    date: "2025-03-15",
    meals: [
      {
        name: "昼",
        total: "130g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "小松菜", amount: "15g" },
            { name: "しらす", amount: "5g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "130g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "にんじん", amount: "15g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "15g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "野菜ジュース", amount: "40ml" },
            { name: "ぶどう", amount: "2", unit: "個" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-16",
    meals: [
      {
        name: "昼",
        total: "130g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "カリフラワー", amount: "15g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "鶏むね肉", amount: "5g" },
          ],
          [{ name: "きなこヨーグルト", amount: "35g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "130g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "65g", recipe: true },
            { name: "トマト", amount: "15g" },
            { name: "しらすピーマン", amount: "10g", recipe: true },
            { name: "まぐろ", amount: "5g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "15g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "いちご", amount: "1/2", unit: "個" }]],
      },
    ],
  },
  {
    date: "2025-03-17",
    meals: [
      {
        name: "昼",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鯛", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "142g",
        items: [
          [
            { name: "マカロニ", amount: "70g" },
            { name: "トマト", amount: "10g" },
            { name: "パプリカ", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "オリーブオイル", amount: "", unit: "少々" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "トマトと卵のスープ", amount: "20g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "イオン飲料", amount: "15ml" }]],
      },
    ],
  },
  {
    date: "2025-03-18",
    meals: [
      {
        name: "昼",
        total: "142g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "玉ねぎ", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鯛", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "10g" },
          ],
          [{ name: "トマトと卵のスープ", amount: "20g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "いちご", amount: "1/3", unit: "個" }]],
      },
    ],
  },
  {
    date: "2025-03-19",
    meals: [
      {
        name: "昼",
        total: "142g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "147g",
        items: [
          [
            { name: "マカロニ", amount: "70g" },
            { name: "小松菜", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鯛", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "豆腐", amount: "10g" },
            { name: "トマトと卵のスープ", amount: "20g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-20",
    meals: [
      {
        name: "昼",
        total: "142g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "パプリカ", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "142g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鯛", amount: "7g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "トマトと卵のスープ", amount: "20g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "ミックスジュース", amount: "70ml" }]],
      },
    ],
  },
  {
    date: "2025-03-21",
    meals: [
      {
        name: "昼",
        total: "142g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "142g",
        items: [
          [
            { name: "マカロニ", amount: "70g" },
            { name: "トマト", amount: "10g" },
            { name: "パプリカ", amount: "10g" },
            { name: "玉ねぎ", amount: "10g" },
            { name: "鯛", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "トマトと卵のスープ", amount: "20g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-22",
    meals: [
      {
        name: "昼",
        total: "142g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "鯛", amount: "7g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "142g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "トマトと卵のスープ", amount: "20g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "りんご", amount: "10g" }]],
      },
    ],
    memo: ["夜の鶏むね肉食べ忘れ"],
  },
  {
    date: "2025-03-23",
    meals: [
      {
        name: "昼",
        total: "142g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "70g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "鯛", amount: "7g" },
          ],
          [{ name: "きなこヨーグルト", amount: "35g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "147g",
        items: [
          [
            { name: "マカロニ", amount: "70g" },
            { name: "小松菜", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "玉ねぎ", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "豆腐", amount: "10g" },
            { name: "トマトと卵のスープ", amount: "20g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-24",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "桃", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ホワイトアスパラガス", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "きゅうりと卵のスープ", amount: "20g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-25",
    meals: [
      {
        name: "昼",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "10g" },
          ],
          [{ name: "きゅうりと卵のスープ", amount: "20g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-03-26",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "桃", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "しらす", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "きゅうりと卵のスープ", amount: "20g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-27",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ホワイトアスパラガス", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "しらす", amount: "7g" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "きゅうりと卵のスープ", amount: "20g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-03-28",
    meals: [
      {
        name: "昼",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "桃", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ホワイトアスパラガス", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "きゅうりと卵のスープ", amount: "20g", recipe: true },
          ],
        ],
      },
    ],
    memo: ["きなこヨーグルト半分残し"],
  },
  {
    date: "2025-03-29",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "きゅうりと卵のスープ", amount: "20g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-03-30",
    meals: [
      {
        name: "昼",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "しらす", amount: "7g" },
          ],
          [{ name: "きなこヨーグルト", amount: "35g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "147g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "75g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "きゅうりと卵のスープ", amount: "20g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-03-31",
    meals: [
      {
        name: "昼",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鯛", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "さくらんぼ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "いんげん", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "トマトと卵のスープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-01",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "しらす", amount: "7g" },
          ],
          [
            { name: "洋梨", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "162g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "10g" },
          ],
          [{ name: "トマトと卵のスープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "おこめぼー赤", amount: "1", unit: "本" }]],
      },
    ],
  },
  {
    date: "2025-04-02",
    meals: [
      {
        name: "昼",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "さくらんぼ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "鯛", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "トマトと卵のスープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-03",
    meals: [
      {
        name: "昼",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "いんげん", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "洋梨", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鯛", amount: "7g" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "トマトと卵のスープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "たまごボーロ", amount: "3", unit: "粒" }]],
      },
    ],
  },
  {
    date: "2025-04-04",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "しらす", amount: "7g" },
          ],
          [
            { name: "さくらんぼ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "いんげん", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "トマトと卵のスープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-05",
    meals: [
      {
        name: "昼",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "鯛", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "洋梨", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "トマトと卵のスープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "ミックスジュース", amount: "70ml" }]],
      },
    ],
  },
  {
    date: "2025-04-06",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "鯛", amount: "7g" },
          ],
          [{ name: "きなこヨーグルト", amount: "35g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "トマトと卵のスープ", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "茶碗蒸し", amount: "45g", recipe: true },
            { name: "お湯", amount: "30ml" },
          ],
          [{ name: "おこめぼー赤", amount: "1", unit: "本" }],
        ],
      },
    ],
  },
  {
    date: "2025-04-07",
    meals: [
      {
        name: "昼",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "たら", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ほうれん草", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-08",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "水菜", amount: "10g" },
            { name: "カリフラワー", amount: "10g" },
            { name: "しらす", amount: "7g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "162g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "10g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "お湯", amount: "60ml" }]],
      },
    ],
  },
  {
    date: "2025-04-09",
    meals: [
      {
        name: "昼",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "10g+110ml",
        items: [[{ name: "食パン", amount: "1/4", unit: "枚" }], [{ name: "イオン飲料", amount: "110ml" }]],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "水菜", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "たら", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
    memo: ["午後のミルクを全く飲まなくて、急遽食パンを食べた"],
  },
  {
    date: "2025-04-10",
    meals: [
      {
        name: "昼",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "たら", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "150g",
        items: [
          [
            { name: "バナナ", amount: "100g" },
            { name: "きなこヨーグルト", amount: "50g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "カリフラワー", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "麦茶", amount: "40ml" }], [{ name: "麦茶", amount: "40ml" }], [{ name: "いちご", amount: "1", unit: "個" }]],
      },
    ],
    memo: ["また午後のミルクを全く飲まなくて、食事になった"],
  },
  {
    date: "2025-04-11",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "しらす", amount: "7g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "110g+45ml",
        items: [
          [
            { name: "食パン", amount: "1/3", unit: "枚" },
            { name: "茶碗蒸し", amount: "50g", recipe: true },
          ],
          [
            { name: "かぼちゃ", amount: "30g" },
            { name: "牛乳", amount: "20g" },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [{ name: "野菜ジュース", amount: "45ml" }],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "水菜", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "湯豆腐", amount: "50g", recipe: true }]],
      },
    ],
    memo: ["来週からの予定だったけど、もう午後のミルクは諦めて3回食に変更"],
  },
  {
    date: "2025-04-12",
    meals: [
      {
        name: "昼",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
            { name: "ホワイトソース", amount: "10g", recipe: true },
            { name: "粉チーズ", amount: "", unit: "少々" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "30g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "しらす", amount: "7g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-04-13",
    meals: [
      {
        name: "昼",
        total: "152g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "たら", amount: "7g" },
          ],
          [
            { name: "バナナ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "35g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "100g+80ml",
        items: [[{ name: "バナナ", amount: "40g" }], [{ name: "豆腐茶碗蒸し", amount: "60g", recipe: true }], [{ name: "麦茶", amount: "80ml" }]],
      },
      {
        name: "夜",
        total: "157g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "80g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "カリフラワー", amount: "10g" },
            { name: "とうもろこし", amount: "10g" },
            { name: "鶏むね肉", amount: "7g" },
          ],
          [
            { name: "豆腐", amount: "15g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "おこめぼー赤", amount: "2", unit: "本" }]],
      },
    ],
  },
  {
    date: "2025-04-14",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "さば", amount: "8g" },
          ],
          [
            { name: "洋梨", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g+50ml",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
          [{ name: "麦茶", amount: "50ml" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ほうれん草", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
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
    date: "2025-04-15",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ブロッコリー", amount: "10g" },
            { name: "しめじ", amount: "10g" },
            { name: "しらす", amount: "8g" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "うどん", amount: "60g" },
            { name: "ほうれん草", amount: "10g" },
            { name: "にんじん", amount: "10g" },
          ],
          [{ name: "豆腐茶碗蒸し", amount: "50g", recipe: true }],
          [
            { name: "麦茶", amount: "50ml" },
            { name: "お湯", amount: "20ml" },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
    memo: ["夕 うどん1/3残し"],
  },
  {
    date: "2025-04-16",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "さくらんぼ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g+15ml",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "しめじ", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "さば", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
          [{ name: "イオン飲料", amount: "15ml" }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "イオン飲料", amount: "30ml" }]],
      },
    ],
  },
  {
    date: "2025-04-17",
    meals: [
      {
        name: "昼",
        total: "130g",
        items: [
          [
            { name: "うどん", amount: "60g" },
            { name: "トマト", amount: "10g" },
            { name: "なす", amount: "10g" },
          ],
          [{ name: "豆腐茶碗蒸し", amount: "50g", recipe: true }],
        ],
      },
      {
        name: "夕",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "しめじ", amount: "10g" },
            { name: "しらす", amount: "8g" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "たまごボーロ", amount: "12g" },
            { name: "ミックスジュース", amount: "15ml" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-18",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "さば", amount: "8g" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
          [{ name: "おこめぼー赤", amount: "1", unit: "本" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "しめじ", amount: "10g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-19",
    meals: [
      {
        name: "昼",
        total: "130g+40ml",
        items: [
          [
            { name: "うどん", amount: "60g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "しめじ", amount: "10g" },
          ],
          [{ name: "豆腐茶碗蒸し", amount: "50g", recipe: true }],
          [{ name: "お湯", amount: "40ml" }],
        ],
      },
      {
        name: "夕",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "洋梨", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "豚肉", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "ハイハイン", amount: "1", unit: "枚" }]],
      },
    ],
  },
  {
    date: "2025-04-20",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "さば", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "りんご", amount: "20g" },
            { name: "キウイ", amount: "10g" },
          ],
          [{ name: "ハイハイン", amount: "1", unit: "枚" }],
        ],
      },
    ],
  },
  {
    date: "2025-04-21",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
          [{ name: "麦茶", amount: "30ml" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "えのき", amount: "10g" },
            { name: "サーモン", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-22",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "えのき", amount: "10g" },
            { name: "サーモン", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "136g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
          ],
          [
            { name: "鶏むね肉", amount: "8g" },
            { name: "ぶり", amount: "8g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "牛肉", amount: "8g" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-04-23",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "牛肉", amount: "8g" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
          [{ name: "お湯", amount: "15ml" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "えのき", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "ぶり", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
          [{ name: "ハイハイン", amount: "2", unit: "枚" }],
        ],
      },
    ],
  },
  {
    date: "2025-04-24",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "サーモン", amount: "8g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "レタス", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
          [{ name: "ハイハイン", amount: "2", unit: "枚" }],
        ],
      },
    ],
  },
  {
    date: "2025-04-25",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "ぶり", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "レタス", amount: "10g" },
            { name: "えのき", amount: "10g" },
            { name: "牛肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
          [{ name: "ハイハイン", amount: "2", unit: "枚" }],
        ],
      },
      {
        name: "夜",
        total: "136g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
          ],
          [
            { name: "鶏むね肉", amount: "8g" },
            { name: "サーモン", amount: "8g" },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "ハイハイン", amount: "1", unit: "枚" }], [{ name: "麦茶", amount: "20ml" }]],
      },
    ],
  },
  {
    date: "2025-04-26",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "牛肉", amount: "8g" },
          ],
          [
            { name: "りんご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "136g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "えのき", amount: "10g" },
          ],
          [
            { name: "鶏むね肉", amount: "8g" },
            { name: "サーモン", amount: "8g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "ぶり", amount: "8g" },
          ],
          [
            { name: "とろろ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "ハイハイン", amount: "1", unit: "枚" },
            { name: "スイカ", amount: "15g" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-27",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "レタス", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "えのき", amount: "10g" },
            { name: "ぶり", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
          [{ name: "たまごボーロ", amount: "6", unit: "粒" }],
        ],
      },
    ],
  },
  {
    date: "2025-04-28",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "しめじ", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-04-29",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "しめじ", amount: "10g" },
            { name: "ツナ（まぐろ水煮）", amount: "8g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
          [{ name: "ハイハイン", amount: "2", unit: "枚" }],
        ],
      },
      {
        name: "夕",
        total: "136g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
          ],
          [
            { name: "鶏むね肉", amount: "8g" },
            { name: "しらす", amount: "8g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-04-30",
    meals: [
      {
        name: "昼",
        total: "140g",
        items: [
          [
            { name: "スープストック 北海道産とうもろこしのシチュー", amount: "100g", recipe: true },
            { name: "おかゆ", amount: "80g", recipe: true },
            { name: "ハイハイン", amount: "2", unit: "枚" },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [
          [
            { name: "緑豆小米粥", amount: "90g", recipe: true },
            { name: "ハイハイン", amount: "1", unit: "枚" },
          ],
          [{ name: "メロン", amount: "2", unit: "かじり" }],
        ],
      },
    ],
  },
  {
    date: "2025-05-01",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-05-02",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "しらす", amount: "8g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "136g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
          ],
          [{ name: "ツナ（まぐろ水煮）", amount: "16g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "かぼちゃ", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "しめじ", amount: "10g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-03",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "トマト", amount: "10g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "ぶどう", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "136g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "しめじ", amount: "10g" },
          ],
          [
            { name: "鶏むね肉", amount: "8g" },
            { name: "ツナ（まぐろ水煮）", amount: "8g" },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "じゃがいも", amount: "10g" },
            { name: "しらす", amount: "8g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
          [{ name: "ハイハイン", amount: "1", unit: "枚" }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "おこめぼー赤", amount: "1", unit: "本" }]],
      },
    ],
  },
  {
    date: "2025-05-04",
    meals: [
      {
        name: "昼",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "なす", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "いちご", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
          [{ name: "おこめぼー赤", amount: "1", unit: "本" }],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "しめじ", amount: "10g" },
            { name: "しらす", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-05",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ほうれん草", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
          [{ name: "おこめぼー赤", amount: "1", unit: "本" }],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "カリフラワーミックス", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "サーモン", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-06",
    meals: [
      {
        name: "昼",
        total: "178g+30ml",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "サーモン", amount: "8g" },
          ],
          [
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
          [{ name: "麦茶", amount: "30ml" }],
        ],
      },
      {
        name: "夕",
        total: "155g",
        items: [
          [
            { name: "スープストック 鶏肉と7種の野菜のミネストローネ", amount: "100g", recipe: true },
            { name: "豆腐", amount: "35g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ほうれん草", amount: "10g" },
            { name: "カリフラワーミックス", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
          [{ name: "ハイハイン", amount: "2", unit: "枚" }],
        ],
      },
    ],
  },
  {
    date: "2025-05-07",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ほうれん草", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g+40ml",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ブロッコリー", amount: "10g" },
            { name: "カリフラワーミックス", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "サーモン", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
          [{ name: "お湯", amount: "40ml" }],
        ],
      },
    ],
    memo: ["今晩からおかゆがかたくなった🍚"],
  },
  {
    date: "2025-05-08",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "カリフラワーミックス", amount: "10g" },
            { name: "サーモン", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "ハイハイン", amount: "1", unit: "枚" }]],
      },
    ],
  },
  {
    date: "2025-05-09",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "サーモン", amount: "8g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
          [{ name: "おこめぼー赤", amount: "1", unit: "本" }],
        ],
      },
      {
        name: "夕",
        total: "155g",
        items: [
          [
            { name: "スープストック 鯛出汁とトマトのおじや", amount: "100g", recipe: true },
            { name: "豆腐", amount: "35g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
          ],
          [{ name: "おこめぼー赤", amount: "1", unit: "本" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "カリフラワーミックス", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
          [{ name: "ハイハイン", amount: "1", unit: "枚" }],
        ],
      },
    ],
  },
  {
    date: "2025-05-10",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "カリフラワーミックス", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "155g",
        items: [
          [
            { name: "スープストック 鶏肉とさつまいものおじや", amount: "100g", recipe: true },
            { name: "豆腐", amount: "35g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "サーモン", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-05-11",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "カリフラワーミックス", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "サーモン", amount: "8g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g+10g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ほうれん草", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
          [{ name: "キューピー ミックスフルーツ", amount: "10g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-05-12",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "ひらたけ", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "アジ", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-13",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ひらたけ", amount: "10g" },
            { name: "たら", amount: "8g" },
          ],
          [
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "155g",
        items: [
          [
            { name: "スープストック 北海道産とうもろこしのシチュー", amount: "100g", recipe: true },
            { name: "豆腐", amount: "35g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "158g",
        items: [
          [
            { name: "おかゆ", amount: "80g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-05-14",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ひらたけ", amount: "10g" },
            { name: "アジ", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-15",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "155g",
        items: [
          [
            { name: "スープストック 鶏肉と7種の野菜のミネストローネ", amount: "100g", recipe: true },
            { name: "豆腐", amount: "35g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
          ],
          [{ name: "ハイハイン", amount: "1", unit: "枚" }],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "にんじん", amount: "10g" },
            { name: "たら", amount: "8g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
      {
        name: "その他",
        items: [
          [{ name: "麦茶", amount: "30ml" }],
          [
            { name: "ハイハイン", amount: "1", unit: "枚" },
            { name: "メロン", amount: "", unit: "たくさん" },
            { name: "麦茶", amount: "15ml" },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-16",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "小松菜", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "アジ", amount: "8g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
          [{ name: "おこめぼー赤", amount: "1", unit: "本" }],
        ],
      },
      {
        name: "おやつ",
        total: "50g",
        items: [
          [
            { name: "メロン", amount: "25g" },
            { name: "水", amount: "25ml" },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "ひらたけ", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "麦茶", amount: "100ml" }]],
      },
    ],
  },
  {
    date: "2025-05-17",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "ひらたけ", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "155g",
        items: [
          [
            { name: "スープストック 鯛出汁とトマトのおじや", amount: "100g", recipe: true },
            { name: "豆腐", amount: "35g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "キューピー ミックスフルーツ", amount: "10g", recipe: true },
          ],
        ],
      },
      {
        name: "夜",
        total: "168g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "たら", amount: "8g" },
          ],
          [
            { name: "オクラ", amount: "10g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-05-18",
    meals: [
      {
        name: "昼",
        total: "178g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "10g" },
            { name: "ひらたけ", amount: "10g" },
            { name: "アボカド", amount: "10g" },
            { name: "アジ", amount: "8g" },
          ],
          [
            { name: "キューピー 国産ももとりんご", amount: "10g", recipe: true },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "173g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "10g" },
            { name: "ブロッコリー", amount: "10g" },
            { name: "かぼちゃ", amount: "10g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
      {
        name: "その他",
        items: [[{ name: "豆腐つくね", amount: "10g", recipe: true }], [{ name: "南瓜餅", amount: "10g", recipe: true }]],
      },
    ],
  },
  {
    date: "2025-05-19",
    meals: [
      {
        name: "昼",
        total: "184g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "12g" },
            { name: "ブロッコリー", amount: "12g" },
            { name: "ラディッシュ", amount: "12g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "179g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "12g" },
            { name: "にんじん", amount: "12g" },
            { name: "えのき", amount: "12g" },
            { name: "さわら", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-20",
    meals: [
      {
        name: "昼",
        total: "184g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "12g" },
            { name: "にんじん", amount: "12g" },
            { name: "キャベツ", amount: "12g" },
            { name: "ほたて", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "146g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "12g" },
            { name: "かぼちゃ", amount: "12g" },
            { name: "ラディッシュ", amount: "12g" },
          ],
          [{ name: "豆腐つくね", amount: "20g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "174g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "12g" },
            { name: "ブロッコリー", amount: "12g" },
            { name: "えのき", amount: "12g" },
            { name: "鶏むね肉", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-05-21",
    meals: [
      {
        name: "昼",
        total: "184g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "12g" },
            { name: "ラディッシュ", amount: "12g" },
            { name: "かぼちゃ", amount: "12g" },
            { name: "さわら", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "179g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "12g" },
            { name: "キャベツ", amount: "12g" },
            { name: "えのき", amount: "12g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-22",
    meals: [
      {
        name: "昼",
        total: "184g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "12g" },
            { name: "ブロッコリー", amount: "12g" },
            { name: "かぼちゃ", amount: "12g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "155g",
        items: [
          [
            { name: "スープストック 鶏肉とさつまいものおじや", amount: "100g", recipe: true },
            { name: "豆腐", amount: "35g" },
          ],
          [{ name: "南瓜餅", amount: "20g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "174g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "にんじん", amount: "12g" },
            { name: "キャベツ", amount: "12g" },
            { name: "ラディッシュ", amount: "12g" },
            { name: "ほたて", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-05-23",
    meals: [
      {
        name: "昼",
        total: "184g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "12g" },
            { name: "ラディッシュ", amount: "12g" },
            { name: "かぼちゃ", amount: "12g" },
            { name: "さわら", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "146g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "12g" },
            { name: "キャベツ", amount: "12g" },
            { name: "えのき", amount: "12g" },
          ],
          [{ name: "豆腐つくね", amount: "20g", recipe: true }],
        ],
      },
      {
        name: "夜",
        total: "179g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ブロッコリー", amount: "12g" },
            { name: "にんじん", amount: "12g" },
            { name: "キャベツ", amount: "12g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
  {
    date: "2025-05-24",
    meals: [
      {
        name: "昼",
        total: "184g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "12g" },
            { name: "ラディッシュ", amount: "12g" },
            { name: "かぼちゃ", amount: "12g" },
            { name: "鶏むね肉", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "174g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "トマト", amount: "12g" },
            { name: "ブロッコリー", amount: "12g" },
            { name: "えのき", amount: "12g" },
            { name: "さわら", amount: "8g" },
            { name: "納豆", amount: "15g" },
          ],
          [{ name: "卵スープ", amount: "25g", recipe: true }],
        ],
      },
    ],
  },
  {
    date: "2025-05-25",
    meals: [
      {
        name: "昼",
        total: "184g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "小松菜", amount: "12g" },
            { name: "にんじん", amount: "12g" },
            { name: "えのき", amount: "12g" },
            { name: "ほたて", amount: "8g" },
          ],
          [
            { name: "キウイ", amount: "10g" },
            { name: "きなこヨーグルト", amount: "40g", recipe: true },
          ],
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          [
            { name: "蒸しパン", amount: "30g", recipe: true },
            { name: "きなこヨーグルト", amount: "70g", recipe: true },
          ],
          [{ name: "バナナ", amount: "30g" }],
        ],
      },
      {
        name: "夜",
        total: "179g",
        items: [
          [
            { name: "鰹節おかゆ", amount: "90g", recipe: true },
            { name: "ブロッコリー", amount: "12g" },
            { name: "キャベツ", amount: "12g" },
            { name: "かぼちゃ", amount: "12g" },
            { name: "豚肉", amount: "8g" },
          ],
          [
            { name: "豆腐", amount: "20g" },
            { name: "卵スープ", amount: "25g", recipe: true },
          ],
        ],
      },
    ],
  },
];
