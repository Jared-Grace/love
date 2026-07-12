import { negative_not_is } from "./negative_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_min_try } from "./list_min_try.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_negative_not_min_try(list, mapper) {
  let mapped = list_map(list, mapper);
  let filtered = list_filter(mapped, negative_not_is);
  let r = list_min_try(filtered);
  return r;
}
