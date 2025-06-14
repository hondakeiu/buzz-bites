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
              { name: "豆", amount: "35g" },
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
  {
    week: "8m0w",
    meals: [
      {
        name: "昼・夜",
        total: "115g-170g",
        items: [
          { name: "おかゆ・マカロニ", amount: "70g" },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "40g" },
              { name: "卵", amount: "20g" },
              { name: "乳", amount: "70g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [
        { name: "鰹節おかゆ", amount: "700g", recipe: true },
        { name: "マカロニ", amount: "280g" },
      ],
      [
        { name: "小松菜", amount: "50g" },
        { name: "トマト", amount: "50g" },
        { name: "にんじん", amount: "40g" },
        { name: "ブロッコリー", amount: "40g" },
        { name: "なす", amount: "30g" },
        { name: "玉ねぎ", amount: "30g" },
        { name: "パプリカ", amount: "30g" },
        { name: "かぼちゃ", amount: "30g" },
        { name: "じゃがいも", amount: "30g" },
        { name: "オクラ", amount: "30g" },
        { name: "ぶどう", amount: "30g" },
        { name: "いちご", amount: "30g" },
      ],
      [
        { name: "鶏むね肉", amount: "49g" },
        { name: "鯛", amount: "49g" },
      ],
      [
        { name: "ホワイトソース", amount: "40g", recipe: true },
        { name: "トマトと卵のスープ", amount: "140g", recipe: true },
      ],
    ],
  },
  {
    week: "8m1w",
    meals: [
      {
        name: "昼・夜",
        total: "120g-175g",
        items: [
          { name: "おかゆ", amount: "75g" },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "40g" },
              { name: "卵", amount: "20g" },
              { name: "乳", amount: "70g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "鰹節おかゆ", amount: "1050g", recipe: true }],
      [
        { name: "ほうれん草", amount: "50g" },
        { name: "トマト", amount: "50g" },
        { name: "にんじん", amount: "40g" },
        { name: "ブロッコリー", amount: "40g" },
        { name: "なす", amount: "30g" },
        { name: "とうもろこし", amount: "30g" },
        { name: "ホワイトアスパラガス", amount: "30g" },
        { name: "かぼちゃ", amount: "30g" },
        { name: "じゃがいも", amount: "30g" },
        { name: "とろろ", amount: "30g" },
        { name: "りんご", amount: "30g" },
        { name: "桃", amount: "30g" },
      ],
      [
        { name: "鶏むね肉", amount: "49g" },
        { name: "ツナ（マグロ水煮）", amount: "28g" },
        { name: "しらす", amount: "21g" },
      ],
      [
        { name: "ホワイトソース", amount: "50g", recipe: true },
        { name: "きゅうりと卵のスープ", amount: "140g", recipe: true },
      ],
    ],
  },
  {
    week: "8m2w",
    meals: [
      {
        name: "昼・夜",
        total: "125g-180g",
        items: [
          { name: "おかゆ", amount: "80g" },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "40g" },
              { name: "卵", amount: "20g" },
              { name: "乳", amount: "70g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "鰹節おかゆ", amount: "1120g", recipe: true }],
      [
        { name: "小松菜", amount: "50g" },
        { name: "トマト", amount: "50g" },
        { name: "にんじん", amount: "40g" },
        { name: "ブロッコリー", amount: "40g" },
        { name: "なす", amount: "30g" },
        { name: "とうもろこし", amount: "30g" },
        { name: "いんげん", amount: "30g" },
        { name: "かぼちゃ", amount: "30g" },
        { name: "じゃがいも", amount: "30g" },
        { name: "とろろ", amount: "30g" },
        { name: "洋梨", amount: "30g" },
        { name: "さくらんぼ", amount: "30g" },
      ],
      [
        { name: "鶏むね肉", amount: "49g" },
        { name: "鯛", amount: "35g" },
        { name: "しらす", amount: "14g" },
      ],
      [
        { name: "ホワイトソース", amount: "50g", recipe: true },
        { name: "トマトと卵のスープ", amount: "175g", recipe: true },
      ],
    ],
  },
  {
    week: "8m3w",
    meals: [
      {
        name: "昼・夜",
        total: "125g-180g",
        items: [
          { name: "おかゆ", amount: "80g" },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "40g" },
              { name: "卵", amount: "20g" },
              { name: "乳", amount: "70g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "鰹節おかゆ", amount: "1120g", recipe: true }],
      [
        { name: "ほうれん草", amount: "50g" },
        { name: "トマト", amount: "50g" },
        { name: "にんじん", amount: "40g" },
        { name: "カリフラワー", amount: "30g" },
        { name: "なす", amount: "30g" },
        { name: "とうもろこし", amount: "30g" },
        { name: "水菜", amount: "30g" },
        { name: "かぼちゃ", amount: "30g" },
        { name: "じゃがいも", amount: "30g" },
        { name: "オクラ", amount: "30g" },
        { name: "バナナ", amount: "40g" },
        { name: "いちご", amount: "30g" },
      ],
      [
        { name: "鶏むね肉", amount: "49g" },
        { name: "たら", amount: "28g" },
        { name: "しらす", amount: "21g" },
      ],
      [
        { name: "ホワイトソース", amount: "50g", recipe: true },
        { name: "卵スープ", amount: "175g", recipe: true },
      ],
    ],
  },
  {
    week: "9m0w",
    meals: [
      {
        name: "昼・夜",
        total: "135g-200g",
        items: [
          { name: "おかゆ", amount: "90g" },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
      {
        name: "夕",
        total: "130g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "うどん", amount: "60g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "豆腐茶碗蒸し", amount: "50g" },
              { name: "ヨーグルト", amount: "70g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [
        { name: "鰹節おかゆ", amount: "1260g", recipe: true },
        { name: "うどん", amount: "180g" },
      ],
      [
        { name: "ほうれん草", amount: "60g" },
        { name: "トマト", amount: "60g" },
        { name: "にんじん", amount: "60g" },
        { name: "ブロッコリー", amount: "50g" },
        { name: "しめじ", amount: "50g" },
        { name: "なす", amount: "40g" },
        { name: "かぼちゃ", amount: "30g" },
        { name: "じゃがいも", amount: "30g" },
        { name: "アボカド", amount: "30g" },
        { name: "りんご", amount: "40g" },
        { name: "洋梨", amount: "20g" },
        { name: "さくらんぼ", amount: "10g" },
      ],
      [
        { name: "鶏むね肉", amount: "32g" },
        { name: "豚肉", amount: "32g" },
        { name: "さば", amount: "32g" },
        { name: "しらす", amount: "16g" },
      ],
      [
        { name: "茶碗蒸しの具", amount: "45g", prepare: true },
        { name: "卵スープ", amount: "175g", recipe: true },
      ],
    ],
  },
  {
    week: "9m1w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "130g-200g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "おかゆ", amount: "90g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "鰹節おかゆ", amount: "1530g", recipe: true }],
      [
        { name: "小松菜", amount: "60g" },
        { name: "トマト", amount: "60g" },
        { name: "にんじん", amount: "60g" },
        { name: "ブロッコリー", amount: "60g" },
        { name: "えのき", amount: "60g" },
        { name: "かぼちゃ", amount: "40g" },
        { name: "じゃがいも", amount: "40g" },
        { name: "レタス", amount: "30g" },
        { name: "とろろ", amount: "30g" },
        { name: "ぶどう", amount: "30g" },
        { name: "りんご", amount: "20g" },
        { name: "キウイ", amount: "20g" },
      ],
      [
        { name: "鶏むね肉", amount: "48g" },
        { name: "牛肉", amount: "32g" },
        { name: "サーモン", amount: "40g" },
        { name: "ぶり", amount: "40g" },
      ],
      [{ name: "卵スープ", amount: "175g", recipe: true }],
    ],
  },
  {
    week: "9m2w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "130g-200g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "おかゆ", amount: "90g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "鰹節おかゆ", amount: "1440g", recipe: true }],
      [
        { name: "小松菜", amount: "60g" },
        { name: "トマト", amount: "60g" },
        { name: "ブロッコリー", amount: "60g" },
        { name: "にんじん", amount: "50g" },
        { name: "しめじ", amount: "50g" },
        { name: "かぼちゃ", amount: "40g" },
        { name: "じゃがいも", amount: "30g" },
        { name: "なす", amount: "30g" },
        { name: "オクラ", amount: "30g" },
        { name: "いちご", amount: "40g" },
        { name: "ぶどう", amount: "30g" },
      ],
      [
        { name: "鶏むね肉", amount: "40g" },
        { name: "牛肉", amount: "40g" },
        { name: "ツナ（まぐろ水煮）", amount: "40g" },
        { name: "しらす", amount: "32g" },
      ],
      [{ name: "卵スープ", amount: "150g", recipe: true }],
    ],
  },
  {
    week: "9m3w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "130g-200g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "おかゆ", amount: "90g" },
              { name: "スープストック", amount: "100g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "鰹節おかゆ", amount: "1260g", recipe: true }],
      [
        { name: "ほうれん草", amount: "70g" },
        { name: "トマト", amount: "70g" },
        { name: "ブロッコリー", amount: "70g" },
        { name: "カリフラワーミックス", amount: "70g" },
        { name: "かぼちゃ", amount: "70g" },
        { name: "アボカド", amount: "70g" },
        { name: "キューピー 国産ももとりんご", amount: "70g", recipe: true },
        { name: "キューピー ミックスフルーツ", amount: "60g", recipe: true },
      ],
      [
        { name: "鶏むね肉", amount: "56g" },
        { name: "サーモン", amount: "56g" },
      ],
      [{ name: "卵スープ", amount: "175g", recipe: true }],
    ],
  },
  {
    week: "9m4w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "130g-200g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "おかゆ", amount: "90g" },
              { name: "スープストック", amount: "100g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "30g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "鰹節おかゆ", amount: "1260g", recipe: true }],
      [
        { name: "小松菜", amount: "60g" },
        { name: "トマト", amount: "60g" },
        { name: "にんじん", amount: "60g" },
        { name: "ブロッコリー", amount: "60g" },
        { name: "ひらたけ", amount: "60g" },
        { name: "かぼちゃ", amount: "60g" },
        { name: "オクラ", amount: "30g" },
        { name: "アボカド", amount: "30g" },
        { name: "キューピー 国産ももとりんご", amount: "70g", recipe: true },
        { name: "キューピー ミックスフルーツ", amount: "60g", recipe: true },
      ],
      [
        { name: "鶏むね肉", amount: "56g" },
        { name: "アジ", amount: "32g" },
        { name: "たら", amount: "24g" },
      ],
      [{ name: "卵スープ", amount: "175g", recipe: true }],
    ],
  },
  {
    week: "10m0w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "131g-196g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "軟飯", amount: "80g" },
              { name: "スープストック", amount: "100g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "36g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [
        { name: "鰹節軟飯", amount: "880g", recipe: true },
        { name: "軟飯", amount: "400g", recipe: true },
      ],
      [
        { name: "小松菜", amount: "72g" },
        { name: "トマト", amount: "72g" },
        { name: "にんじん", amount: "72g" },
        { name: "ブロッコリー", amount: "72g" },
        { name: "えのき", amount: "72g" },
        { name: "かぼちゃ", amount: "72g" },
        { name: "キャベツ", amount: "72g" },
        { name: "ラディッシュ", amount: "72g" },
        { name: "キウイ", amount: "70g" },
      ],
      [
        { name: "豚肉", amount: "32g" },
        { name: "鶏むね肉", amount: "24g" },
        { name: "さわら", amount: "32g" },
        { name: "ほたて", amount: "24g" },
      ],
      [
        { name: "豆腐つくね", amount: "40g", recipe: true },
        { name: "南瓜餅", amount: "20g", recipe: true },
        { name: "卵スープ", amount: "175g", recipe: true },
      ],
    ],
  },
  {
    week: "10m1w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "131g-196g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "軟飯", amount: "80g" },
              { name: "スープストック", amount: "100g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "36g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "軟飯", amount: "1240g", recipe: true }],
      [
        { name: "小松菜", amount: "48g" },
        { name: "トマト", amount: "72g" },
        { name: "にんじん", amount: "72g" },
        { name: "ブロッコリー", amount: "72g" },
        { name: "ひらたけ", amount: "60g" },
        { name: "かぼちゃ", amount: "72g" },
        { name: "ピーマン", amount: "60g" },
        { name: "ズッキーニ", amount: "60g" },
      ],
      [
        { name: "豚肉", amount: "32g" },
        { name: "鶏むね肉", amount: "24g" },
        { name: "サーモン", amount: "56g" },
      ],
      [
        { name: "豆腐つくね", amount: "45g", recipe: true },
        { name: "卵スープ", amount: "175g", recipe: true },
      ],
    ],
  },
  {
    week: "10m2w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "131g-196g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "軟飯", amount: "80g" },
              { name: "キューピー", amount: "130g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "36g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "軟飯", amount: "1120g", recipe: true }],
      [
        { name: "ほうれん草", amount: "72g" },
        { name: "トマト", amount: "72g" },
        { name: "にんじん", amount: "72g" },
        { name: "ブロッコリー", amount: "72g" },
        { name: "えのき", amount: "72g" },
        { name: "かぼちゃ", amount: "72g" },
        { name: "なす", amount: "72g" },
      ],
      [
        { name: "豚肉", amount: "32g" },
        { name: "鶏むね肉", amount: "24g" },
        { name: "鯛", amount: "56g" },
      ],
      [
        { name: "豆腐つくね", amount: "90g", recipe: true },
        { name: "卵スープ", amount: "175g", recipe: true },
      ],
    ],
  },
  {
    week: "10m3w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "131g-196g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "軟飯", amount: "80g" },
              { name: "キューピー", amount: "130g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "36g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "軟飯", amount: "1120g", recipe: true }],
      [
        { name: "ほうれん草", amount: "72g" },
        { name: "ミニトマト", amount: "72g" },
        { name: "にんじん", amount: "72g" },
        { name: "ブロッコリー", amount: "72g" },
        { name: "しめじ", amount: "72g" },
        { name: "かぼちゃ", amount: "72g" },
        { name: "とうもろこし", amount: "72g" },
      ],
      [
        { name: "牛肉", amount: "32g" },
        { name: "鶏むね肉", amount: "24g" },
        { name: "サーモン", amount: "56g" },
      ],
      [{ name: "卵スープ", amount: "175g", recipe: true }],
    ],
  },
  {
    week: "11m0w",
    meals: [
      {
        name: "昼・夕・夜",
        total: "137g-202g",
        items: [
          {
            name: "炭水化物",
            variants: [
              { name: "軟飯", amount: "80g" },
              { name: "キューピー", amount: "130g" },
              { name: "蒸しパン", amount: "30g" },
            ],
          },
          { name: "野菜・果物", amount: "42g" },
          {
            name: "たんぱく質",
            variants: [
              { name: "肉", amount: "15g" },
              { name: "魚", amount: "15g" },
              { name: "豆", amount: "45g" },
              { name: "卵", amount: "30g" },
              { name: "乳", amount: "80g" },
            ],
          },
        ],
      },
    ],
    stock: [
      [{ name: "軟飯", amount: "1120g", recipe: true }],
      [
        { name: "小松菜", amount: "84g" },
        { name: "トマト", amount: "84g" },
        { name: "にんじん", amount: "84g" },
        { name: "ブロッコリー", amount: "84g" },
        { name: "ひらたけ", amount: "84g" },
        { name: "かぼちゃ", amount: "84g" },
        { name: "ズッキーニ", amount: "84g" },
      ],
      [
        { name: "豚肉", amount: "32g" },
        { name: "鶏むね肉", amount: "24g" },
        { name: "ツナ（まぐろ油漬）", amount: "56g" },
      ],
      [{ name: "卵スープ", amount: "175g", recipe: true }],
    ],
  },
];
