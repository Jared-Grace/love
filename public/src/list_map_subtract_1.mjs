import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_subtract_1(positions) {
  let mapped2 = list_map(positions, subtract_1);
  return mapped2;
}
