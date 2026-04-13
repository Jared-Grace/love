import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_index_of_curried } from "../../../love/public/src/list_index_of_curried.mjs";
export function list_map_index_of(args, difference2) {
  let r = list_index_of_curried(args);
  let indices = list_map(difference2, r);
  return indices;
}
