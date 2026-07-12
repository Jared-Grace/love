import { list_unique } from "./list_unique.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_unique(mapped, lambda) {
  let mapped2 = list_map(mapped, lambda);
  let unique = list_unique(mapped2);
  return unique;
}
