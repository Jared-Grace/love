import { subtract_1 } from "./subtract_1.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_subtract_1(positions) {
  let mapped = list_map(positions, subtract_1);
  return mapped;
}
