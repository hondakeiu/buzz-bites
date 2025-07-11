import type { Category } from "./schemas";

export const foods: Category[] = [
  {
    name: "主食",
    id: "carbs",
    items: [
      { name: "お米", date: "2024-12-22", status: "好き" },
      { name: "そうめん", date: "2025-01-20", status: "好き" },
      { name: "うどん", date: "2025-01-28", status: "好き" },
      { name: "食パン", date: "2025-02-03", status: "好き" },
      { name: "麩", date: "2025-02-10", status: "好き" },
      { name: "小麦粉", date: "2025-03-03", status: "好き" },
      { name: "マカロニ", date: "2025-03-17", status: "好き" },
      { name: "ロールパン", date: "2025-05-20", status: "好き" },
      { name: "スパゲッティ", date: "2025-06-03", status: "好き" },
      { name: "米粉", date: "2025-06-16", status: "好き" },
      { name: "玄米", date: "2025-07-01", status: "好き" },
      { name: "塩パン", date: "2025-07-02", status: "好き" },
      { name: "バゲット", date: "2025-07-03", status: "好き" },
    ],
  },
  {
    name: "野菜",
    id: "vegetables",
    items: [
      { name: "にんじん", date: "2024-12-24", status: "好き" },
      { name: "かぼちゃ", date: "2024-12-25", status: "好き" },
      { name: "ほうれん草", date: "2024-12-26", status: "好き" },
      { name: "白菜", date: "2025-01-10", status: "好き" },
      { name: "じゃがいも", date: "2025-01-10", status: "好き" },
      { name: "とうもろこし", date: "2025-01-14", status: "好き" },
      { name: "きゅうり", date: "2025-01-19", status: "普通", note: "汁が嫌そう" },
      { name: "なす", date: "2025-01-20", status: "好き" },
      { name: "ブロッコリー", date: "2025-01-26", status: "好き" },
      { name: "ミニトマト", date: "2025-01-27", status: "好き" },
      { name: "さつまいも", date: "2025-02-02", status: "好き" },
      { name: "小松菜", date: "2025-02-03", status: "好き" },
      { name: "大根", date: "2025-02-05", status: "好き" },
      { name: "玉ねぎ", date: "2025-02-06", status: "好き" },
      { name: "キャベツ", date: "2025-02-09", status: "好き" },
      { name: "かぶ", date: "2025-02-11", status: "好き" },
      { name: "オクラ", date: "2025-02-18", status: "好き" },
      { name: "里芋", date: "2025-02-24", status: "好き" },
      { name: "ズッキーニ", date: "2025-02-25", status: "好き" },
      { name: "いんげん", date: "2025-02-26", status: "好き" },
      { name: "レタス", date: "2025-02-26", status: "好き" },
      { name: "トマト", date: "2025-03-04", status: "好き" },
      { name: "カリフラワー", date: "2025-03-10", status: "好き" },
      { name: "チンゲン菜", date: "2025-03-10", status: "好き" },
      { name: "万能ねぎ", date: "2025-03-10", status: "好き" },
      { name: "ピーマン", date: "2025-03-11", status: "好き" },
      { name: "パプリカ", date: "2025-03-17", status: "好き" },
      { name: "ホワイトアスパラガス", date: "2025-03-24", status: "好き" },
      { name: "とろろ", date: "2025-03-25", status: "好き" },
      { name: "水菜", date: "2025-04-08", status: "好き" },
      { name: "しめじ", date: "2025-04-13", status: "好き" },
      { name: "アボカド", date: "2025-04-15", status: "好き" },
      { name: "えのき", date: "2025-04-21", status: "好き" },
      { name: "ひらたけ", date: "2025-05-12", status: "好き" },
      { name: "ラディッシュ", date: "2025-05-19", status: "好き" },
      { name: "ごぼう", date: "2025-06-21", status: "好き" },
      { name: "エリンギ", date: "2025-06-30", status: "好き" },
    ],
  },
  {
    name: "果物",
    id: "fruit",
    items: [
      { name: "バナナ", date: "2025-01-17", status: "好き" },
      { name: "みかん", date: "2025-01-21", status: "嫌い", note: "酸っぱいのが嫌" },
      { name: "いちご", date: "2025-01-29", status: "好き", note: "たまに怪しい" },
      { name: "りんご", date: "2025-02-02", status: "好き" },
      { name: "デコポン", date: "2025-02-11", status: "嫌い", note: "酸っぱいのが嫌" },
      { name: "ぶどう", date: "2025-02-24", status: "好き" },
      { name: "オレンジ", date: "2025-03-02", status: "好き" },
      { name: "桃", date: "2025-03-24", status: "好き" },
      { name: "さくらんぼ", date: "2025-03-31", status: "好き" },
      { name: "洋梨", date: "2025-04-01", status: "好き" },
      { name: "キウイ", date: "2025-04-20", status: "好き" },
      { name: "スイカ", date: "2025-04-26", status: "好き" },
      { name: "メロン", date: "2025-04-30", status: "好き" },
      { name: "アメリカンチェリー", date: "2025-06-27", status: "好き" },
      { name: "すもも", date: "2025-07-06", status: "好き" },
    ],
  },
  {
    name: "肉",
    id: "meat",
    items: [
      { name: "ささみ", date: "2025-02-18", status: "好き" },
      { name: "鶏むね肉", date: "2025-03-03", status: "好き" },
      { name: "豚肉", date: "2025-04-14", status: "好き" },
      { name: "牛肉", date: "2025-04-22", status: "好き" },
      { name: "鶏レバー", date: "2025-06-15", status: "好き" },
    ],
  },
  {
    name: "魚",
    id: "fish",
    items: [
      { name: "鯛", date: "2025-01-08", status: "好き" },
      { name: "しらす", date: "2025-01-19", status: "好き" },
      { name: "ひらめ", date: "2025-01-25", status: "好き" },
      { name: "たら", date: "2025-02-02", status: "好き" },
      { name: "ツナ（まぐろ水煮）", date: "2025-02-19", status: "好き" },
      { name: "かつお", date: "2025-02-24", status: "好き" },
      { name: "サーモン", date: "2025-03-03", status: "好き" },
      { name: "まぐろ", date: "2025-03-10", status: "好き" },
      { name: "さば", date: "2025-04-14", status: "好き" },
      { name: "ぶり", date: "2025-04-22", status: "好き" },
      { name: "アジ", date: "2025-05-12", status: "好き" },
      { name: "さわら", date: "2025-05-19", status: "好き" },
      { name: "ほたて", date: "2025-05-20", status: "好き" },
      { name: "ツナ（まぐろ油漬）", date: "2025-06-16", status: "好き" },
      { name: "めかじき", date: "2025-06-30", status: "好き" },
    ],
  },
  {
    name: "豆",
    id: "beans",
    items: [
      { name: "豆腐", date: "2025-01-06", status: "好き" },
      { name: "納豆", date: "2025-02-18", status: "好き" },
      { name: "枝豆", date: "2025-02-19", status: "好き" },
      { name: "緑豆", date: "2025-04-30", status: "好き" },
      { name: "小米", date: "2025-04-30", status: "好き" },
    ],
  },
  {
    name: "卵",
    id: "egg",
    items: [
      { name: "卵黄", date: "2025-01-21", status: "好き" },
      { name: "卵白", date: "2025-02-20", status: "好き" },
      { name: "卵", date: "2025-03-17", status: "好き" },
    ],
  },
  {
    name: "乳",
    id: "milk",
    items: [
      { name: "粉ミルク", date: "2024-07-18", status: "好き" },
      { name: "ヨーグルト", date: "2025-02-10", status: "好き" },
      { name: "粉チーズ", date: "2025-02-25", status: "好き" },
      { name: "牛乳", date: "2025-03-03", status: "好き" },
      { name: "バター", date: "2025-03-03", status: "好き" },
      { name: "プチダノン", date: "2025-06-19", status: "好き" },
      { name: "フォローアップミルク", date: "2025-07-07", status: "好き" },
      { name: "チーズ", date: "2025-07-08", status: "好き" },
    ],
  },
  {
    name: "飲み物",
    id: "drink",
    items: [
      { name: "麦茶", date: "2024-12-07", status: "好き" },
      { name: "お湯", date: "2025-01-20", status: "好き" },
      { name: "りんごジュース", date: "2025-02-12", status: "好き" },
      { name: "ジャスミン茶", date: "2025-02-19", status: "好き" },
      { name: "野菜ジュース", date: "2025-03-15", status: "好き" },
      { name: "イオン飲料", date: "2025-03-17", status: "好き" },
      { name: "ミックスジュース", date: "2025-03-20", status: "好き" },
      { name: "水", date: "2025-05-16", status: "好き" },
    ],
  },
  {
    name: "味付け",
    id: "flavoring",
    items: [
      { name: "和風だし", date: "2024-12-26", status: "好き" },
      { name: "きなこ", date: "2025-01-23", status: "好き" },
      { name: "鰹節", date: "2025-02-17", status: "好き" },
      { name: "コンソメ", date: "2025-02-17", status: "好き" },
      { name: "ほんだし", date: "2025-05-11", status: "好き" },
      { name: "砂糖", date: "2025-05-18", status: "好き" },
      { name: "醤油", date: "2025-05-18", status: "好き" },
      { name: "赤味噌", date: "2025-06-23", status: "好き" },
      { name: "うどんスープ", date: "2025-07-02", status: "好き" },
    ],
  },
  {
    name: "おやつ",
    id: "snack",
    items: [
      { name: "おこめぼー", date: "2025-02-12", status: "好き" },
      { name: "おこめぼー赤", date: "2025-04-01", status: "好き" },
      { name: "たまごボーロ", date: "2025-04-03", status: "好き" },
      { name: "ハイハイン", date: "2025-04-19", status: "好き" },
      { name: "お魚すなっく", date: "2025-07-09", status: "好き" },
    ],
  },
  {
    name: "市販品",
    id: "prepared",
    items: [{ name: "カリフラワーミックス", date: "2025-05-05", status: "好き" }],
  },
  {
    name: "その他",
    id: "others",
    items: [
      { name: "片栗粉", date: "2025-01-24", status: "好き" },
      { name: "オリーブオイル", date: "2025-03-17", status: "好き" },
      { name: "ごま油", date: "2025-05-18", status: "好き" },
      { name: "わかめ", date: "2025-06-08", status: "好き" },
      { name: "サラダ油", date: "2025-06-16", status: "好き" },
    ],
  },
];
