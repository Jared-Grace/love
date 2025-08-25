import { list_join } from "./list_join.mjs";
import { string_split } from "./string_split.mjs";
import { marker } from "./marker.mjs";
export function string_replace(s, from, to) {
  marker("1");
  let split = string_split(s, from);
  let replaced = list_join(split, to);
  return replaced;
}
