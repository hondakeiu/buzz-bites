export type Category = {
  name: string;
  id: string;
  items: Item[];
};

export type Item = {
  name: string;
  date: string | null;
  status: string | null;
  note?: string;
};
