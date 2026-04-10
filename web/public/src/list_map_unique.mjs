import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_unique(mapped, lambda) {
  let mapped2 = list_map(mapped, lambda);
  let unique = list_unique(mapped2);
  return unique;
}
