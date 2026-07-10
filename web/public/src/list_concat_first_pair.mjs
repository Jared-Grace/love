import { list_transform_at } from "../../../love/public/src/list_transform_at.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function list_concat_first_pair(item, list) {
  function lambda2(first) {
    let combined = text_combine(item, first);
  }
  list_transform_at(list, 0, lambda2);
  return list;
}
