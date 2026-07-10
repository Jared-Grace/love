import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_transform_first } from "../../../love/public/src/list_transform_first.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function list_concat_first_pair(item, list) {
  arguments_assert(arguments, 2);
  log(list_concat_first_pair.name, {
    list,
  });
  function lambda2(first) {
    let combined = text_combine(item, first);
    return combined;
  }
  list_transform_first(list, lambda2);
  log(list_concat_first_pair.name, {
    list,
  });
  return list;
}
