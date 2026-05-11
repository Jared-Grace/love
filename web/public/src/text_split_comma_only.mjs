import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
export function text_split_comma_only(t) {
  let split = text_split_comma(t);
  list_size_1_assert(list);
  return split;
}
