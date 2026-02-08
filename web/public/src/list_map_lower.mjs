import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_lower(input) {
  let mapped = list_map(input, text_lower_to);
  return mapped;
}
