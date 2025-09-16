import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_first(mapped4) {
  let mapped6 = list_map(mapped4, list_first);
  return mapped6;
}
