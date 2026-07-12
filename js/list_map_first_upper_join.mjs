import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function list_map_first_upper_join(list) {
  let mapped = list_map(list, text_first_upper_to);
  let joined = list_join_empty(mapped);
  return joined;
}
