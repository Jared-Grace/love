import { list_map_join_empty } from "./list_map_join_empty.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function list_map_first_upper_join(list) {
  let joined = list_map_join_empty(list, text_first_upper_to);
  return joined;
}
