import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_split_multiple(str, delimiters) {
  marker("1");
  let { first, remaining } = list_first_remaining(delimiters);
  function lambda(delimiter) {}
  each(delimiters, lambda);
  return parts;
}
