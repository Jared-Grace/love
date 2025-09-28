import { list_map } from "./list_map.mjs";
export function list_map_combine(right, list) {
  function lambda(left) {
    let combined = left + right;
    return combined;
  }
  let combineds = list_map(list, lambda);
  return combineds;
}
