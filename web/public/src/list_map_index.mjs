import { list_map } from "./list_map.mjs";
export function list_map_index(list, mapper) {
  let index = 0;
  return list_map(list, (item) => {
    mapper(item, index);
    index++;
  });
}
