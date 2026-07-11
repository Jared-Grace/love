import { subtract_ } from "../../../love/public/src/subtract_1.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_subtract_(positions) {
  let mapped = list_map(positions, subtract_);
  return mapped;
}
