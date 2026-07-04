import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
export function text_between_space(list) {
  let split = text_split_empty(list);
  let joined = list_join_space(split);
  return joined;
}
