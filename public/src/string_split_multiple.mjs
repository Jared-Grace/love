import { list_join } from "../../../love/public/src/list_join.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_split_multiple(str, delimiters) {
  marker("1");
  let { first, remaining } = list_first_remaining(delimiters);
  function lambda(delimiter) {
    let split = string_split(str, delimiter);
    str = list_join(split, first);
  }
  each(remaining, lambda);
  let parts = str;
  return parts;
}
