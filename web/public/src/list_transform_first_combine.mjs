import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { list_transform_first } from "../../../love/public/src/list_transform_first.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function list_transform_first_combine(item, list) {
  arguments_assert(arguments, 2);
  function lambda(first) {
    let combined = text_combine(item, first);
    return combined;
  }
  list_transform_first(list, lambda);
  return list;
}
