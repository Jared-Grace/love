import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
export function list_map_combine(list, right) {
  function lambda(left) {
    let combined = text_combine(left, right);
    return combined;
  }
  let combineds = list_map(list, lambda);
  return combineds;
}
