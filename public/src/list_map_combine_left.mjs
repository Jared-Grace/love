import { marker } from "../../../love/public/src/marker.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_combine_left(list, left) {
  marker("1");
  function lambda(right) {
    let combined = left + right;
    return combined;
  }
  let combineds = list_map(list, lambda);
  return combineds;
}
