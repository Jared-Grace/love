import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
export function list_map_split_space(mapped2) {
  function lambda(item) {
    let split2 = string_split_space(item);
    return split2;
  }
  let mapped3 = list_map(mapped2, lambda);
  return mapped3;
}
