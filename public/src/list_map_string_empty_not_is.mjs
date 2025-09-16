import { list_map } from "./list_map.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
export function list_map_string_empty_not_is(mapped3) {
  function lambda(item) {
    let ne = string_empty_not_is(item);
    return ne;
  }
  let mapped4 = list_map(mapped3, lambda);
  return mapped4;
}
