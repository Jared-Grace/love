import { each } from "../../../love/public/src/each.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_multiple(list, mappers) {
  function lambda3(mapper) {
    list = list_map(list, mapper);
  }
  each(mappers, lambda3);
  return list;
}
