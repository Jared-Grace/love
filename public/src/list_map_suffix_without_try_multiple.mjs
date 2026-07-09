import { each } from "../../../love/public/src/each.mjs";
import { list_map_suffix_without_try } from "../../../love/public/src/list_map_suffix_without_try.mjs";
export function list_map_suffix_without_try_multiple(filtered, suffixes) {
  function lambda(item) {
    filtered = list_map_suffix_without_try(filtered, item);
  }
  each(suffixes, lambda);
  return filtered;
}
