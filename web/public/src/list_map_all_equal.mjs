import { list_all_equal } from "../../../love/public/src/list_all_equal.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_all_equal(properties, r) {
  let mapped = list_map(properties, r);
  let eq = list_all_equal(mapped);
  return eq;
}
