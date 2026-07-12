import { list_squash } from "./list_squash.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_squash(properties, lambda$item) {
  let mapped = list_map(properties, lambda$item);
  let squashed = list_squash(mapped);
  return squashed;
}
