import { text_upper_to } from "../../../love/public/src/text_upper_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
export function list_map_upper_join(list) {
  let mapped = list_map(list, text_upper_to);
  let joined = list_join_empty(mapped);
  return joined;
}
