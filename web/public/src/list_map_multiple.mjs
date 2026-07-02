import { each } from "../../../love/public/src/each.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_multiple(split, mappers) {
  function lambda3(mapper) {
    split = list_map(split, mapper);
  }
  each(mappers, lambda3);
  return split;
}
