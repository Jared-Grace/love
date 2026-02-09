import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function text_split_multiple(str, delimiters) {
  let v = list_first_remaining(delimiters);
  let remaining = object_property_get(v, "remaining");
  let first = object_property_get(v, "first");
  function lambda(delimiter) {
    let split = text_split(str, delimiter);
    str = list_join(split, first);
  }
  each(remaining, lambda);
  let parts = text_split(str, first);
  return parts;
}
