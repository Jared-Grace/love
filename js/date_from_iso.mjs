import { subtract } from "./subtract.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_last } from "./list_last.mjs";
export function date_from_iso(iso) {
  "a 'YYYY-MM-DD' string as a local-time Date at midnight, parsed by parts so it never shifts a day the way UTC parsing can";
  let parts = text_split(iso, "-");
  let first = list_first(parts);
  let year = Number(first);
  let second = list_second(parts);
  let month = Number(second);
  let last = list_last(parts);
  let day = Number(last);
  let difference = subtract(month, 1);
  let d = new Date(year, difference, day);
  return d;
}
