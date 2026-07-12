import { integer_to } from "./integer_to.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_integer(split) {
  let mapped = list_map(split, integer_to);
  return mapped;
}
