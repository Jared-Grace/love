import { each } from "./each.mjs";
import { list_map_prefix_without_try } from "./list_map_prefix_without_try.mjs";
export function list_map_prefix_without_try_multiple(list, prefixes) {
  function lambda(item) {
    list = list_map_prefix_without_try(list, item);
  }
  each(prefixes, lambda);
  return list;
}
