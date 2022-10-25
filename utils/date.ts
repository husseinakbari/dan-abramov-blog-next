import dayjs from "dayjs";

export const getDate = (count: number = 1) => {
  const val = dayjs().locale("en").add(count, "day")

  const year = val.format("YYYY");
  const month = val.format("MMMM");
  const day = val.format("DD");
  return `${month} ${day}, ${year}`;
};
