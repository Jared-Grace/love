import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_whitespace_normalize(split) {
  let mapped2 = list_map(split, whitespace_normalize);
  return mapped2;
}
