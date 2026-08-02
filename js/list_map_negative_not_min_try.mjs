import { list_map_filter } from "./list_map_filter.mjs";
import { negative_not_is } from "./negative_not_is.mjs";
import { list_min_try } from "./list_min_try.mjs";
export function list_map_negative_not_min_try(list, mapper) {
  let filtered = list_map_filter(list, mapper, negative_not_is);
  let r = list_min_try(filtered);
  return r;
}
