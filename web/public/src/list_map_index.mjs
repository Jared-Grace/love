import { list_map } from "./list_map.mjs";
export function list_map_index(list, mapper) {
  let index = 0;
  function lambda(item) {
    mapper(item, index);
    index++;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
