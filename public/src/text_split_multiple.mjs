import { function_copy_replace_first } from "../../../love/public/src/function_copy_replace_first.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function text_split_multiple(str, delimiters) {
  let v = list_first_remaining(delimiters);
  let remaining = object_property_get(v, "remaining");
  let function_copy_replace_first = object_property_get(v, "first");
  function lambda(delimiter) {
    let split = text_split(str, delimiter);
    str = list_join(split, function_copy_replace_first);
  }
  each(remaining, lambda);
  let parts = text_split(str, function_copy_replace_first);
  return parts;
}
