import { string_split_comma } from "./string_split_comma.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_split_comma(mapped2) {
  let mapped3 = list_map(mapped2, string_split_comma);
  return mapped3;
}
