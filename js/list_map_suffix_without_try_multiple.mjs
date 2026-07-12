import { each } from "./each.mjs";
import { list_map_suffix_without_try } from "./list_map_suffix_without_try.mjs";
export function list_map_suffix_without_try_multiple(filtered, suffixes) {
  function lambda(item) {
    filtered = list_map_suffix_without_try(filtered, item);
  }
  each(suffixes, lambda);
  return filtered;
}
