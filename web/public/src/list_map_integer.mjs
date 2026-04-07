import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_integer(split) {
  let mapped2 = list_map(split, integer_to);
  return mapped2;
}
