import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_split_comma(mapped2) {
  let mapped = list_map(mapped2, string_split_comma);
  return mapped;
}
