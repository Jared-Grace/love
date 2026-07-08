import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
export function list_map_upper_join(list) {
  function lambda(item) {}
  let mapped = list_map(list2, lambda);
  let joined = list_join_empty(list);
  return joined;
}
