import { list_join_space } from "./list_join_space.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function text_between_space(list) {
  let split = text_split_empty(list);
  let joined = list_join_space(split);
  return joined;
}
