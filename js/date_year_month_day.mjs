import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function date_year_month_day(iso) {
  "$plain iso";
  "A 'YYYY-MM-DD' date as year, short month and day, biggest first, like '2026 Sept 24'. The months are spelled out here rather than asked of the browser, whose short September is 'Sep' in one place and 'Sept' in another.";
  arguments_assert(arguments, 1);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let parts = iso.split("-");
  let left = Number(parts[1]);
  let month = months[subtract(left, 1)];
  let label = parts[0] + " " + month + " " + Number(parts[2]);
  return label;
}
