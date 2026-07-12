import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_whitespace_normalize(split) {
  let mapped = list_map(split, whitespace_normalize);
  return mapped;
}
