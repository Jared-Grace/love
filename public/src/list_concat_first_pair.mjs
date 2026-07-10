import { list_transform_first } from "../../../love/public/src/list_transform_first.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function list_concat_first_pair(item, list) {
  function lambda2(first) {
    let combined = text_combine(item, first);
  }
  list_transform_first(list, lambda2);
  return list;
}
