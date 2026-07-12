import { list_map } from "./list_map.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function list_map_split_space(mapped2) {
  function lambda(item) {
    let split = text_split_space(item);
    return split;
  }
  let mapped3 = list_map(mapped2, lambda);
  return mapped3;
}
