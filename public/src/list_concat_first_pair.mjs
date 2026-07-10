import { list_set_first } from "../../../love/public/src/list_set_first.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function list_concat_first_pair(item, list) {
  let first = list_first(list);
  let combined = text_combine(item, first);
  list_set_first(args, expression);
  return list;
}
