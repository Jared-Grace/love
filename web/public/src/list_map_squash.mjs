import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_squash(properties, fn) {
  let mapped = list_map(properties, fn);
  let squashed = list_squash(mapped);
  return squashed;
}
