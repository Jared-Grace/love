import { list_map } from "./list_map.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function list_map_split_space(mapped2) {
  let mapped3 = list_map(mapped2, text_split_space);
  return mapped3;
}
