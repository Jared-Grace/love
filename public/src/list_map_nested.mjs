import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_nested(mapper, clauses) {
  function lambda(item) {
    let mapped2 = list_map(item, mapper);
    return mapped2;
  }
  let mapped = list_map(clauses, lambda);
  return mapped;
}
