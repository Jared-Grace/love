import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_multiple(list, mappers) {
  let mapped = list;
  function lambda(mapper) {
    mapped = list_map(mapped, mapper);
  }
  each(mappers, lambda);
  return mapped;
}
