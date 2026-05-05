import { each } from "../../../love/public/src/each.mjs";
import { list_map_prefix_without_try } from "../../../love/public/src/list_map_prefix_without_try.mjs";
export function list_map_prefix_without_try_multiple(filtered2, prefixes) {
  function lambda(item) {
    filtered2 = list_map_prefix_without_try(filtered2, item);
  }
  each(prefixes, lambda);
  return filtered2;
}
