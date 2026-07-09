import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function list_map_combine_left(list, left) {
  function lambda(right) {
    let combined = text_combine(left, right);
    return combined;
  }
  let combineds = list_map(list, lambda);
  return combineds;
}
