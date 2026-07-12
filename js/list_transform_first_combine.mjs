import { arguments_assert } from "./arguments_assert.mjs";
import { list_transform_first } from "./list_transform_first.mjs";
import { text_combine } from "./text_combine.mjs";
export function list_transform_first_combine(item, list) {
  arguments_assert(arguments, 2);
  function lambda2(first) {
    let combined = text_combine(item, first);
    return combined;
  }
  list_transform_first(list, lambda2);
  return list;
}
