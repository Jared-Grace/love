import { each } from "../../../love/public/src/each.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_multiple(list, mappers) {
  let mapped = list;
  function lambda(mapper) {
    mapped = list_map(mapped, mapper);
  }
  each(mappers, lambda);
  return mapped;
}
