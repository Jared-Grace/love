import { text_get } from "../../../love/public/src/text_get.mjs";
import { string_index_last } from "../../../love/public/src/string_index_last.mjs";
export function string_last(s) {
  let index_last = string_index_last(s);
  let item = text_get(s, index_last);
  return item;
}
