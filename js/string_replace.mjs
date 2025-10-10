import { list_join } from "../../../love/public/src/list_join.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_replace(s, from, to) {
  marker("1");
  let split = string_split(s, from);
  let replaced = list_join(split, to);
  return replaced;
}
