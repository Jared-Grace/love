import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_first(mapped4) {
  let mapped = list_map(mapped4, list_first);
  return mapped;
}
