export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
  date: string;
}

export interface ThemeState {
  mode: "dark" | "light";
}
