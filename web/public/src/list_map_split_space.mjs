import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
export function list_map_split_space(mapped2) {
  function lambda(item) {
    let split2 = text_split_space(item);
    return split2;
  }
  let mapped3 = list_map(mapped2, lambda);
  return mapped3;
}
