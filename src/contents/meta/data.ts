export type Meta = {
  name: string;
  title: string;
  description: string;
};

export const sitename = "ぶんぶんごはん";

export const data: { [key in string]: Meta } = {
  home: {
    name: "home",
    title: sitename,
    description: "文ちゃんの離乳食の記録",
  },
  food: {
    name: "food",
    title: "食材",
    description: "文ちゃんが食べた食材リスト",
  },
  recipe: {
    name: "recipe",
    title: "料理",
    description: "文ちゃんが食べた料理のリスト",
  },
  schedule: {
    name: "schedule",
    title: "目安量",
    description: "文ちゃんが食べるご飯の目安量",
  },
  menu: {
    name: "menu",
    title: "献立",
    description: "文ちゃんの今日の献立",
  },
};
