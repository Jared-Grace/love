import { list_map } from "./list_map.mjs";
export function list_map_index(list, lambda$item$index) {
  let index = 0;
  function lambda(item) {
    lambda$item$index(item, index);
    index++;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
