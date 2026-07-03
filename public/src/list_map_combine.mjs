import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_combine(list, right) {
  function lambda(left) {
    let combined = left + right;
    return combined;
  }
  let combineds = list_map(list, lambda);
  return combineds;
}
