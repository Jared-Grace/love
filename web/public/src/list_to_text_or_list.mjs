import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_take_less_1 } from "../../../love/public/src/list_take_less_1.mjs";
export function list_to_text_or_list(list) {
  let taken = list_take_less_1(list);
  let last = list_last(list);
  let joined = list_join_comma_space(taken);
  let combined = text_combine_multiple([joined, " ", "or", " ", last]);
  return combined;
}
