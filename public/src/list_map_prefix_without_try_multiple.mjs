import { each } from "../../../love/public/src/each.mjs";
import { list_map_prefix_without_try } from "../../../love/public/src/list_map_prefix_without_try.mjs";
export function list_map_prefix_without_try_multiple(list, prefixes) {
  function lambda(item) {
    list = list_map_prefix_without_try(list, item);
  }
  each(prefixes, lambda);
  return list;
}
