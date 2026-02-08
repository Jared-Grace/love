import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_split_comma(mapped2) {
  let mapped = list_map(mapped2, text_split_comma);
  return mapped;
}
