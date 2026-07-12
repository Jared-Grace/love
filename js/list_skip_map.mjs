import { list_map } from "./list_map.mjs";
import { list_skip } from "./list_skip.mjs";
export function list_skip_map(sbs, sum, mapper) {
  let skipped = list_skip(sbs, sum);
  let mapped = list_map(skipped, mapper);
  return mapped;
}
