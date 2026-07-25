import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_last } from "./list_last.mjs";
export function date_from_iso(iso) {
  "a 'YYYY-MM-DD' string as a local-time Date at midnight, parsed by parts so it never shifts a day the way UTC parsing can";
  let parts = text_split(iso, "-");
  let year = Number(list_first(parts));
  let month = Number(list_second(parts));
  let day = Number(list_last(parts));
  let d = new Date(year, month - 1, day);
  return d;
}
