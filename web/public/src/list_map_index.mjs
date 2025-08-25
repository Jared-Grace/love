import { list_map } from "./list_map.mjs";
export function list_map_index(list, lambda$item$index) {
  let index = 0;
  function lambda(item) {
    let value = lambda$item$index(item, index);
    index++;
    return value;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
